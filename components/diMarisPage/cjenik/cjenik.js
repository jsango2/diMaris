import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router.js";
import {
  WrapAll,
  BlueLine,
  Naslov,
  Poslovnice,
  PoslovnicaButton,
  Info,
  InfoText,
  Controls,
  DownloadButton,
  TableWrap,
  Table,
  Napomena,
  Poruka,
  Filteri,
  Checkbox,
  Broj,
  Kartice,
  Kartica,
  Oznaka,
  Loader,
  Kostur,
} from "./style.js";

const TEXT = {
  hr: {
    naslov: "CJENIK",
    ucitavanje: "Učitavanje cjenika…",
    greska: "Cjenik trenutno nije dostupan. Pokušajte ponovno kasnije.",
    nemaCjenika: "Za ovu poslovnicu trenutno nema objavljenog cjenika.",
    aktualni: "Aktualni cjenik",
    arhivski: "Cjenik iz arhive",
    objavljeno: "Objavljeno",
    datum: "Datum cjenika",
    arhiva: "Arhiva (zadnjih 30 dana)",
    pretraga: "Pretraži proizvod",
    preuzmi: "Preuzmi CSV",
    nemaRezultata: "Nema proizvoda koji odgovaraju pretrazi.",
    napomena: "Cijene su izražene u eurima (€). Preuzeti CSV sadrži sve proizvode, uključujući nedostupne.",
    samoDostupni: "Prikaži samo dostupne proizvode",
    prikazano: (n, ukupno) => `Prikazano ${n} od ${ukupno} proizvoda`,
    akcija: "Akcija",
    stupci: {
      naziv: "Naziv",
      marka: "Marka",
      jedinica: "Jed. mjere",
      cijenaJm: "Cijena za jed. mjere",
      mpc: "Maloprodajna cijena",
      akcija: "Posebni oblik prodaje",
      sidrena: "Sidrena cijena",
      dostupnost: "Dostupnost",
    },
    dostupno: { DOSTUPNO: "Dostupno", NEDOSTUPNO: "Nedostupno" },
    u: "u",
  },
  en: {
    naslov: "PRICE LIST",
    ucitavanje: "Loading price list…",
    greska: "The price list is currently unavailable. Please try again later.",
    nemaCjenika: "There is currently no published price list for this store.",
    aktualni: "Current price list",
    arhivski: "Archived price list",
    objavljeno: "Published",
    datum: "Price list date",
    arhiva: "Archive (last 30 days)",
    pretraga: "Search products",
    preuzmi: "Download CSV",
    nemaRezultata: "No products match your search.",
    napomena: "Prices are in euro (€). The downloaded CSV contains all products, including unavailable ones.",
    samoDostupni: "Show available products only",
    prikazano: (n, ukupno) => `Showing ${n} of ${ukupno} products`,
    akcija: "Offer",
    stupci: {
      naziv: "Name",
      marka: "Brand",
      jedinica: "Unit",
      cijenaJm: "Price per unit",
      mpc: "Retail price",
      akcija: "Special offer",
      sidrena: "Anchor price",
      dostupnost: "Availability",
    },
    dostupno: { DOSTUPNO: "Available", NEDOSTUPNO: "Unavailable" },
    u: "at",
  },
};

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  const src = String(text || "").replace(/^﻿/, "");

  for (let i = 0; i < src.length; i += 1) {
    const ch = src[i];
    if (quoted) {
      if (ch === '"' && src[i + 1] === '"') {
        field += '"';
        i += 1;
      } else if (ch === '"') {
        quoted = false;
      } else {
        field += ch;
      }
    } else if (ch === '"') {
      quoted = true;
    } else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && src[i + 1] === "\n") i += 1;
      row.push(field);
      if (row.some((value) => value !== "")) rows.push(row);
      row = [];
      field = "";
    } else {
      field += ch;
    }
  }
  row.push(field);
  if (row.some((value) => value !== "")) rows.push(row);

  if (rows.length === 0) return [];
  const header = rows[0];
  return rows.slice(1).map((values) =>
    Object.fromEntries(header.map((key, index) => [key, values[index] ?? ""]))
  );
}

function formatPrice(value, locale) {
  const number = Number(String(value).replace(",", "."));
  if (!String(value).trim() || !Number.isFinite(number)) return value || "";
  return `${number.toLocaleString(locale === "en" ? "en-GB" : "hr-HR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} €`;
}

function formatDateTime(iso, locale, t) {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  const dateText = new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "hr-HR", {
    timeZone: "Europe/Zagreb",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).format(date);
  const timeText = new Intl.DateTimeFormat("hr-HR", {
    timeZone: "Europe/Zagreb",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
  return `${dateText} ${t.u} ${timeText}`;
}

// exportedAt je lokalno zagrebačko vrijeme bez zone ("2026-11-12T06:33:10").
function formatLocalDate(localIso, locale) {
  const match = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(localIso || "");
  if (!match) return localIso || "";
  const [, y, m, d, hh, mm] = match;
  return locale === "en"
    ? `${Number(d)}/${Number(m)}/${y} ${hh}:${mm}`
    : `${Number(d)}. ${Number(m)}. ${y}. ${hh}:${mm}`;
}

function Cjenik() {
  const { locale } = useRouter();
  const t = locale === "en" ? TEXT.en : TEXT.hr;

  const [stores, setStores] = useState(null);
  const [indexError, setIndexError] = useState(false);
  const [storeCode, setStoreCode] = useState(null);
  const [selectedUrl, setSelectedUrl] = useState(null);
  const [rows, setRows] = useState(null);
  const [rowsError, setRowsError] = useState(false);
  const [query, setQuery] = useState("");
  const [samoDostupni, setSamoDostupni] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/cjenici")
      .then((response) => {
        if (!response.ok) throw new Error(String(response.status));
        return response.json();
      })
      .then((data) => {
        if (cancelled) return;
        const list = Array.isArray(data?.stores) ? data.stores : [];
        setStores(list);
        const fromUrl = new URLSearchParams(window.location.search).get("poslovnica");
        const first =
          list.find((store) => store.code === fromUrl) ||
          list.find((store) => store.latest) ||
          list[0];
        if (first) setStoreCode(first.code);
      })
      .catch(() => {
        if (!cancelled) setIndexError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const store = useMemo(
    () => (stores || []).find((item) => item.code === storeCode) || null,
    [stores, storeCode]
  );

  const archive = useMemo(() => {
    if (!store) return [];
    return store.archive.length > 0 ? store.archive : store.latest ? [store.latest] : [];
  }, [store]);

  const selected = useMemo(
    () => archive.find((entry) => entry.url === selectedUrl) || store?.latest || null,
    [archive, selectedUrl, store]
  );
  const isLatest = Boolean(selected && store?.latest && selected.filename === store.latest.filename);

  useEffect(() => {
    setSelectedUrl(null);
    setQuery("");
  }, [storeCode]);

  // Odabrana poslovnica ostaje u adresi (?poslovnica=T004) pa se link može poslati dalje.
  const chooseStore = (code) => {
    setStoreCode(code);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("poslovnica", code);
      url.hash = "cjenik";
      window.history.replaceState(window.history.state, "", url.toString());
    } catch (error) {
      // adresa se ne mora ažurirati
    }
  };

  useEffect(() => {
    if (!selected) {
      setRows(null);
      return undefined;
    }
    let cancelled = false;
    setRows(null);
    setRowsError(false);
    fetch(selected.url)
      .then((response) => {
        if (!response.ok) throw new Error(String(response.status));
        return response.text();
      })
      .then((text) => {
        if (!cancelled) setRows(parseCsv(text));
      })
      .catch(() => {
        if (!cancelled) setRowsError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [selected?.url]);

  const filteredRows = useMemo(() => {
    if (!rows) return [];
    const needle = query.trim().toLocaleLowerCase("hr");
    return rows.filter(
      (row) =>
        (!samoDostupni || row.dostupnost !== "NEDOSTUPNO") &&
        (!needle ||
          [row.naziv, row.marka, row.sifra, row.barkod]
            .join(" ")
            .toLocaleLowerCase("hr")
            .includes(needle))
    );
  }, [rows, query, samoDostupni]);

  const downloadName = selected?.filename || "cjenik.csv";
  const downloadHref = selected ? (isLatest ? selected.publicUrl : selected.url) : null;

  return (
    <WrapAll id="cjenik">
      <BlueLine />
      <Naslov>{t.naslov}</Naslov>

      {indexError && <Poruka>{t.greska}</Poruka>}
      {!indexError && !stores && (
        <Loader role="status" aria-live="polite">
          {t.ucitavanje}
        </Loader>
      )}

      {stores && (
        <>
          <Poslovnice role="tablist">
            {stores.map((item) => (
              <PoslovnicaButton
                key={item.code}
                type="button"
                role="tab"
                aria-selected={item.code === storeCode}
                $active={item.code === storeCode}
                onClick={() => chooseStore(item.code)}
              >
                {item.name}
                <span>{item.address}</span>
              </PoslovnicaButton>
            ))}
          </Poslovnice>

          {store && !selected && <Poruka>{t.nemaCjenika}</Poruka>}

          {store && selected && (
            <>
              <Info>
                <InfoText>
                  <strong>{isLatest ? t.aktualni : t.arhivski}</strong>
                  {" · "}
                  {store.name}, {store.address}
                  <br />
                  {selected.publishedAt ? (
                    <>
                      {t.objavljeno}: {formatDateTime(selected.publishedAt, locale, t)}
                    </>
                  ) : (
                    <>
                      {t.datum}: {formatLocalDate(selected.exportedAt, locale)}
                    </>
                  )}
                </InfoText>
                <Controls>
                  <label>
                    {t.arhiva}
                    <select
                      value={selected.url}
                      onChange={(event) => setSelectedUrl(event.target.value)}
                    >
                      {archive.map((entry) => (
                        <option key={entry.url} value={entry.url}>
                          {formatLocalDate(entry.exportedAt, locale)}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    {t.pretraga}
                    <input
                      type="search"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                  </label>
                  {downloadHref && (
                    <DownloadButton href={downloadHref} download={downloadName}>
                      {t.preuzmi}
                    </DownloadButton>
                  )}
                </Controls>
              </Info>

              {rowsError && <Poruka>{t.greska}</Poruka>}
              {!rowsError && !rows && (
                <>
                  <Loader role="status" aria-live="polite">
                    {t.ucitavanje}
                  </Loader>
                  <Kostur aria-hidden="true">
                    {Array.from({ length: 8 }, (_, index) => (
                      <div key={index} />
                    ))}
                  </Kostur>
                </>
              )}
              {!rowsError && rows && (
                <>
                  <Filteri>
                    <Checkbox>
                      <input
                        type="checkbox"
                        checked={samoDostupni}
                        onChange={(event) => setSamoDostupni(event.target.checked)}
                      />
                      {t.samoDostupni}
                    </Checkbox>
                    <Broj aria-live="polite">{t.prikazano(filteredRows.length, rows.length)}</Broj>
                  </Filteri>
                  <TableWrap>
                    <Table>
                      <thead>
                        <tr>
                          <th>{t.stupci.naziv}</th>
                          <th>{t.stupci.marka}</th>
                          <th>{t.stupci.jedinica}</th>
                          <th className="num">{t.stupci.cijenaJm}</th>
                          <th className="num">{t.stupci.mpc}</th>
                          <th>{t.stupci.akcija}</th>
                          <th className="num">{t.stupci.sidrena}</th>
                          <th>{t.stupci.dostupnost}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredRows.map((row, index) => (
                          <tr key={`${row.sifra}-${index}`}>
                            <td>{row.naziv}</td>
                            <td>{row.marka}</td>
                            <td>{row.jedinica_mjere}</td>
                            <td className="num">{formatPrice(row.cijena_za_jedinicu_mjere, locale)}</td>
                            <td className="num">{formatPrice(row.maloprodajna_cijena, locale)}</td>
                            <td>
                              {row.posebni_oblik_prodaje === "DA" && (
                                <Oznaka $akcija>{row.naziv_posebnog_oblika_prodaje || t.akcija}</Oznaka>
                              )}
                            </td>
                            <td className="num sidrena">{formatPrice(row.sidrena_cijena, locale)}</td>
                            <td>
                              <Oznaka $nedostupno={row.dostupnost === "NEDOSTUPNO"}>
                                {t.dostupno[row.dostupnost] || row.dostupnost}
                              </Oznaka>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    {filteredRows.length === 0 && <Poruka>{t.nemaRezultata}</Poruka>}
                  </TableWrap>
                  <Kartice>
                    {filteredRows.map((row, index) => {
                      const akcija = row.posebni_oblik_prodaje === "DA";
                      return (
                        <Kartica key={`${row.sifra}-${index}`} $nedostupno={row.dostupnost === "NEDOSTUPNO"}>
                          <div className="vrh">
                            <div>
                              <div className="naziv">{row.naziv}</div>
                              {row.marka && <div className="marka">{row.marka}</div>}
                            </div>
                            <div className="sidrena">
                              <span>{t.stupci.sidrena}</span>
                              {formatPrice(row.sidrena_cijena, locale)}
                            </div>
                          </div>
                          <dl>
                            <div>
                              <dt>{t.stupci.mpc}</dt>
                              <dd>{formatPrice(row.maloprodajna_cijena, locale)}</dd>
                            </div>
                            <div>
                              <dt>{t.stupci.cijenaJm}</dt>
                              <dd>
                                {formatPrice(row.cijena_za_jedinicu_mjere, locale)} / {row.jedinica_mjere}
                              </dd>
                            </div>
                          </dl>
                          <div className="oznake">
                            {akcija && (
                              <Oznaka $akcija>{row.naziv_posebnog_oblika_prodaje || t.akcija}</Oznaka>
                            )}
                            <Oznaka $nedostupno={row.dostupnost === "NEDOSTUPNO"}>
                              {t.dostupno[row.dostupnost] || row.dostupnost}
                            </Oznaka>
                          </div>
                        </Kartica>
                      );
                    })}
                    {filteredRows.length === 0 && <Poruka>{t.nemaRezultata}</Poruka>}
                  </Kartice>
                  <Napomena>{t.napomena}</Napomena>
                </>
              )}
            </>
          )}
        </>
      )}
    </WrapAll>
  );
}

export default Cjenik;
