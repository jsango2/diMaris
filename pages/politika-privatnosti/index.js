import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';

export default function PrivacyPolicy() {
  const { locale } = useRouter();
  const isHR = locale === 'hr';
  const title = isHR ? 'Politika privatnosti | Marikomerc' : 'Privacy Policy | Marikomerc';
  const desc = isHR
    ? 'Politika privatnosti Marikomerc d.o.o. — informacije o prikupljanju, korištenju i zaštiti osobnih podataka u skladu s GDPR-om.'
    : 'Marikomerc d.o.o. Privacy Policy — how we collect, use and protect personal data in accordance with the GDPR.';
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name='description' content={desc} />
        <meta name='robots' content='index,follow' />
        {/* Ako koristiš Next i18n routing, ove alternate linkove će pomoći SEO-u */}
        <link rel='alternate' hrefLang='hr' href='/hr/politika-privatnosti' />
        <link rel='alternate' hrefLang='en' href='/en/politika-privatnosti' />
      </Head>
      <article className='legal'>
        <figure className='legal__hero'>
          <img
            src='https://cms.bluvia.hr/wp-content/uploads/2025/08/hero-legal-marikomerc.webp'
            alt={isHR ? 'Ilustracija privatnosti podataka' : 'Illustration of data privacy'}
            loading='lazy'
          />
        </figure>
        <header className='legal__header'>
          <h1 className='legal__title'>{isHR ? 'Politika privatnosti' : 'Privacy Policy'}</h1>
          <p className='legal__subtitle'>
            {isHR ? 'Politika privatnosti – Marikomerc d.o.o.' : 'Privacy Policy – Marikomerc d.o.o.'}
          </p>
          <p className='legal__intro'>
            {isHR ? (
              <>
                Marikomerc d.o.o. poštuje vašu privatnost i obvezuje se štititi vaše osobne podatke u skladu s Općom
                uredbom o zaštiti podataka (GDPR).
              </>
            ) : (
              <>
                Marikomerc d.o.o. respects your privacy and is committed to protecting your personal data in accordance
                with the General Data Protection Regulation (GDPR).
              </>
            )}
          </p>
        </header>
        <div className='legal__content'>
          {isHR ? (
            <>
              <h2>1. Uvodne odredbe</h2>
              <p>
                Vaša privatnost i zaštita osobnih podataka za nas predstavljaju važan prioritet. Predani smo zaštiti
                osobnih podataka i uvijek postupamo u skladu s važećim zakonima i propisima o zaštiti podataka,
                uključujući UREDBU (EU) 2016/679 EUROPSKOG PARLAMENTA I VIJEĆA od 27. travnja 2016. (GDPR).
              </p>
              <p>
                Ova Obavijest izrađena je kako bismo vam na jasan i transparentan način pojasnili koje osobne podatke
                prikupljamo, u koje svrhe ih koristimo te koja su vaša prava u vezi s obradom osobnih podataka.
              </p>
              <p>
                Ako imate bilo kakvih pitanja ili zahtjeva vezanih uz zaštitu privatnosti, obratite nam se na:{' '}
                <a href='mailto:info@marikomerc.hr'>info@marikomerc.hr</a>.
              </p>

              <h2>2. Na koga se ova Obavijest odnosi?</h2>
              <p>Ova Obavijest odnosi se na obradu osobnih podataka kada:</p>
              <ul className='legal__list'>
                <li>posjećujete našu internetsku stranicu,</li>
                <li>kontaktirate nas putem kontakt obrasca ili e-maila,</li>
                <li>prijavljujete se na naš newsletter,</li>
                <li>sudjelujete u nagradnoj igri ili promotivnoj aktivnosti,</li>
                <li>koristite naše usluge kao kupac ili poslovni partner,</li>
                <li>prijavljujete se za posao u Marikomerc d.o.o.</li>
              </ul>

              <h2>3. Tko obrađuje vaše osobne podatke?</h2>
              <p>
                <strong>Voditelj obrade:</strong>
              </p>
              <p>
                Marikomerc d.o.o., Grabi 54, 23241 Poličnik
                <br />
                OIB: 02359254184
                <br />
                E-mail: <a href='mailto:info@marikomerc.hr'>info@marikomerc.hr</a>
              </p>

              <h2>4. Koje osobne podatke obrađujemo i u koju svrhu?</h2>
              <p>
                Osobni podaci koje obrađujemo razlikuju se ovisno o vašem odnosu s nama i obrađuju se isključivo u
                legitimne svrhe.
              </p>
              <ul className='legal__list'>
                <li>
                  <strong>Osnovni podaci</strong> (ime, prezime, OIB, kontakt podaci, sadržaj poruke) – za komunikaciju,
                  pružanje usluge i izvršavanje ugovora.
                </li>
                <li>
                  <strong>Newsletter (Mailchimp)</strong> – e-mail adresa prilikom prijave.
                </li>
                <li>
                  <strong>Podaci o zaposlenju i obrazovanju</strong> (prijave na natječaje) – za potrebe zapošljavanja.
                </li>
                <li>
                  <strong>Podaci o kupcima</strong> (npr. podaci za dostavu, reklamacije) – za izvršavanje ugovora i
                  zakonskih obveza.
                </li>
                <li>
                  <strong>Podaci o posjetiteljima web stranice</strong> (IP adresa, tip preglednika, OS,
                  vrijeme/trajanje posjeta, pregledane stranice putem Google Analyticsa) – za ispravan rad stranice i
                  analizu prometa.
                </li>
                <li>
                  <strong>Podaci za marketing</strong> (ime, e-mail, broj telefona) – isključivo uz vašu privolu.
                </li>
                <li>
                  <strong>Komunikacija</strong> putem e-maila ili telefona – podaci koje dobrovoljno dostavite prilikom
                  kontaktiranja.
                </li>
              </ul>

              <h2>5. Pravna osnova za obradu</h2>
              <ul className='legal__list'>
                <li>
                  <strong>Zakonska obveza</strong> (računovodstvo, porezni propisi, radno pravo).
                </li>
                <li>
                  <strong>Ugovorna obveza</strong> (isporuka proizvoda i usluga).
                </li>
                <li>
                  <strong>Privola</strong> (newsletter, marketinške obavijesti).
                </li>
                <li>
                  <strong>Legitimni interes</strong> (sigurnost poslovanja, unaprjeđenje usluge).
                </li>
              </ul>

              <h2>6. Obrada osobnih podataka putem videonadzora</h2>
              <p>
                Videonadzor koristimo radi zaštite osoba i imovine Marikomerc d.o.o., na temelju legitimnog interesa.
                Video snimke čuvamo najduže 30 dana ili dulje ako su izuzete kao dokaz u sudskim, upravnim, arbitražnim
                ili drugim postupcima.
              </p>
              <p>
                Snimke možemo dostaviti nadležnim tijelima (npr. MUP, sud) ako je to potrebno za provođenje postupaka.
              </p>

              <h2>7. Razdoblje čuvanja podataka</h2>
              <p>
                Osobne podatke obrađujemo dok se ne ispuni svrha obrade. Nakon prestanka svrhe podatke više ne
                koristimo, ali ih pohranjujemo onoliko koliko nas obvezuju propisi o arhivskom gradivu.
              </p>
              <ul className='legal__list'>
                <li>
                  <strong>Newsletter e-mail adrese:</strong> do povlačenja privole, a najviše 36 mjeseci.
                </li>
                <li>
                  <strong>Podaci iz kontakt forme:</strong> do okončanja komunikacije.
                </li>
                <li>
                  <strong>Tehnički podaci (Google Analytics):</strong> prema pravilima pohrane Googlea.
                </li>
                <li>
                  <strong>Podaci za zakonske obveze:</strong> u rokovima propisanim zakonom.
                </li>
              </ul>
              <p>Nakon isteka roka podaci se brišu ili anonimiziraju.</p>

              <h2>8. Dijeljenje i prijenos podataka</h2>
              <p>
                Vaše podatke ne prodajemo niti neovlašteno ustupamo trećim stranama. Podaci se mogu dijeliti isključivo
                s:
              </p>
              <ul className='legal__list'>
                <li>
                  <strong>Pružateljem usluge newslettera</strong> (Mailchimp, SAD) – uz standardne ugovorne klauzule i
                  odgovarajuće mjere zaštite.
                </li>
                <li>
                  <strong>Pružateljima IT i hosting usluga</strong> koji održavaju našu web stranicu.
                </li>
                <li>
                  <strong>Nadležnim tijelima</strong> – kada je to propisano zakonom ili nužno radi zaštite naših prava.
                </li>
              </ul>

              <h2>9. Međunarodni prijenos podataka</h2>
              <p>
                Ako se podaci prenose izvan EGP-a (npr. pri korištenju Mailchimpa), primjenjuju se mehanizmi zaštite u
                skladu s GDPR-om, uključujući standardne ugovorne klauzule Europske komisije.
              </p>

              <h2>10. Automatizirana obrada i profiliranje</h2>
              <p>
                Ne provodimo automatizirano donošenje odluka niti profiliranje korisnika na temelju prikupljenih
                podataka.
              </p>

              <h2>11. Vaša prava</h2>
              <p>
                Svoja prava možete ostvariti pisanim putem na adresu Marikomerc d.o.o., Grabi 54, 23241 Poličnik ili
                putem e-pošte: <a href='mailto:info@marikomerc.hr'>info@marikomerc.hr</a>.
              </p>
              <p>Imate pravo zatražiti:</p>
              <ul className='legal__list'>
                <li>pristup osobnim podacima,</li>
                <li>ispravak netočnih ili nepotpunih podataka,</li>
                <li>brisanje podataka,</li>
                <li>ograničenje obrade,</li>
                <li>prijenos podataka drugom voditelju obrade,</li>
                <li>povlačenje privole u bilo kojem trenutku,</li>
                <li>prigovor na obradu (osobito za marketing),</li>
                <li>podnošenje prigovora AZOP-u.</li>
              </ul>
              <p>
                U ostvarivanju prava moguća je primjena iznimki sukladno čl. 17. st. 3. GDPR-a. Ako smatrate da se vaši
                podaci obrađuju protivno propisima, možete podnijeti prigovor AZOP-u, Ulica Metela Ožegovića 16, 10000
                Zagreb.
              </p>

              <h2>12. Kolačići (cookies)</h2>
              <p>
                Naša internetska stranica koristi kolačiće radi ispravnog rada i unaprjeđenja korisničkog iskustva.
                Kolačići su male datoteke koje preglednik sprema na uređaj pri posjetu stranici. Ne služe za
                špijuniranje, ne prate sve što korisnik radi, nisu zlonamjerni kod i ne spremaju korisnička
                imena/lozinke.
              </p>
              <p>Kolačići koje koristimo:</p>
              <ul className='legal__list'>
                <li>
                  <strong>Nužni kolačići</strong> – ključni za funkcioniranje stranice (navigacija, pristup sigurnim
                  područjima, ispravan prikaz). Bez njih web ne bi radio ispravno.
                </li>
                <li>
                  <strong>Analitički i statistički kolačići</strong> – Google Analytics u agregiranom obliku (broj
                  posjetitelja, najčešće stranice, trajanje posjeta, uređaji/preglednici). Ne omogućuju identifikaciju
                  pojedinca.
                </li>
                <li>
                  <strong>Funkcionalni kolačići</strong> – pamte vaše postavke (jezik, veličina fonta, lokacija) radi
                  boljeg iskustva.
                </li>
                <li>
                  <strong>Marketinški kolačići trećih strana</strong> – trenutno ih ne koristimo; eventualno u
                  budućnosti isključivo uz vašu privolu.
                </li>
              </ul>

              <h2>13. Kako nas možete kontaktirati?</h2>
              <p>
                Marikomerc d.o.o., Grabi 54, 23241 Poličnik
                <br />
                OIB: 02359254184
                <br />
                E-mail: <a href='mailto:info@marikomerc.hr'>info@marikomerc.hr</a>
              </p>

              <h2>14. Tehničke i organizacijske mjere zaštite</h2>
              <p>
                Primjenjujemo stroge sigurnosne postupke kako bismo umanjili rizik uništenja podataka, neovlaštenog
                otkrivanja, pristupa i drugih povreda. Oprema je u sigurnom okruženju s ograničenim fizičkim pristupom.
              </p>
              <p>
                Koristimo vatrozide, snažne lozinke, antivirusne programe i druge mjere zaštite. Pristup imaju samo
                ovlaštene osobe, što je uređeno internim aktima i obvezom povjerljivosti.
              </p>

              <h2>15. Promjene Obavijesti</h2>
              <p>
                Obavijest redovito ažuriramo kako bi bila točna i ažurna te zadržavamo pravo izmjene sadržaja kad je to
                nužno. O izmjenama ćemo vas pravovremeno informirati putem naše internetske stranice u skladu s načelom
                transparentnosti.
              </p>

              <p className='legal__note'>
                OIB: 02359254184 • Odobreni veterinarski broj objekta: HR2966EU • Timocom ID: 227763 • Registrirano kod
                Trgovačkog suda u Zadru, MBS 060079376 • Temeljni kapital 4.212.500,00 kn uplaćen u cijelosti • IBAN
                HR8024020061100078207 (Erste &amp; Steiermärkische Bank d.d.)
              </p>
            </>
          ) : (
            <>
              <h2>1. Introduction</h2>
              <p>
                Your privacy and the protection of your personal data are a priority for us. We are committed to
                safeguarding personal data and always act in accordance with applicable data protection laws, including
                Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 (GDPR).
              </p>
              <p>
                This Notice explains, in a clear and transparent way, what personal data we collect, for which purposes
                we use it, and what your rights are in relation to such processing.
              </p>
              <p>
                For any questions or requests regarding privacy, contact us at{' '}
                <a href='mailto:info@marikomerc.hr'>info@marikomerc.hr</a>.
              </p>

              <h2>2. Who does this Notice apply to?</h2>
              <p>This Notice applies to personal data processing when you:</p>
              <ul className='legal__list'>
                <li>visit our website,</li>
                <li>contact us via the contact form or by email,</li>
                <li>subscribe to our newsletter,</li>
                <li>take part in a prize draw or promotional activity,</li>
                <li>use our services as a customer or business partner,</li>
                <li>apply for a job at Marikomerc d.o.o.</li>
              </ul>

              <h2>3. Who processes your personal data?</h2>
              <p>
                <strong>Controller:</strong>
              </p>
              <p>
                Marikomerc d.o.o., Grabi 54, 23241 Poličnik, Croatia
                <br />
                VAT ID (OIB): 02359254184
                <br />
                Email: <a href='mailto:info@marikomerc.hr'>info@marikomerc.hr</a>
              </p>

              <h2>4. What personal data we process and for what purpose</h2>
              <p>
                The personal data we process depends on your relationship with us and is processed strictly for
                legitimate purposes.
              </p>
              <ul className='legal__list'>
                <li>
                  <strong>Basic data</strong> (name, surname, VAT ID, contact details, message content) – for
                  communication, service provision and contract performance.
                </li>
                <li>
                  <strong>Newsletter (Mailchimp)</strong> – email address upon subscription.
                </li>
                <li>
                  <strong>Employment/education data</strong> (job applications) – for recruitment purposes.
                </li>
                <li>
                  <strong>Customer data</strong> (e.g., delivery details, complaints) – to perform contracts and comply
                  with legal obligations.
                </li>
                <li>
                  <strong>Website visitor data</strong> (IP address, browser type, OS, time/duration of visit, pages
                  viewed via Google Analytics) – to ensure proper website operation and traffic analysis.
                </li>
                <li>
                  <strong>Marketing data</strong> (name, email, phone number) – only with your consent.
                </li>
                <li>
                  <strong>Communications</strong> by email or phone – data you voluntarily provide when contacting us.
                </li>
              </ul>

              <h2>5. Legal bases for processing</h2>
              <ul className='legal__list'>
                <li>
                  <strong>Legal obligation</strong> (accounting, tax, employment law).
                </li>
                <li>
                  <strong>Contract performance</strong> (delivery of products and services).
                </li>
                <li>
                  <strong>Consent</strong> (newsletter, marketing communications).
                </li>
                <li>
                  <strong>Legitimate interest</strong> (business security, service improvement).
                </li>
              </ul>

              <h2>6. Processing via video surveillance (CCTV)</h2>
              <p>
                We use CCTV to protect persons and property at Marikomerc d.o.o., on the basis of our legitimate
                interests. Recordings are stored for up to 30 days, or longer if retained as evidence in judicial,
                administrative, arbitration or other proceedings.
              </p>
              <p>Recordings may be provided to competent authorities (e.g., Police, Courts) where required.</p>

              <h2>7. Data retention</h2>
              <p>
                We process personal data for as long as necessary to fulfil the purpose of processing. After the purpose
                ceases, we no longer use the data, but retain it for as long as required by applicable archiving laws.
              </p>
              <ul className='legal__list'>
                <li>
                  <strong>Newsletter emails:</strong> until consent is withdrawn, and no longer than 36 months.
                </li>
                <li>
                  <strong>Contact form data:</strong> until the communication is fully concluded.
                </li>
                <li>
                  <strong>Technical data (Google Analytics):</strong> according to Google’s retention rules.
                </li>
                <li>
                  <strong>Data required by law:</strong> for the statutory retention periods.
                </li>
              </ul>
              <p>Upon expiry, data is deleted or anonymised.</p>

              <h2>8. Data sharing and transfers</h2>
              <p>
                We do not sell or unlawfully disclose your personal data to third parties. Data may be shared only with:
              </p>
              <ul className='legal__list'>
                <li>
                  <strong>Newsletter provider</strong> (Mailchimp, USA) – with appropriate safeguards (Standard
                  Contractual Clauses).
                </li>
                <li>
                  <strong>IT and hosting providers</strong> maintaining our website.
                </li>
                <li>
                  <strong>Competent authorities</strong> – where required by law or necessary to protect our rights.
                </li>
              </ul>

              <h2>9. International data transfers</h2>
              <p>
                Where data is transferred outside the EEA (e.g., when using Mailchimp), we apply GDPR-compliant transfer
                mechanisms, including the European Commission’s Standard Contractual Clauses.
              </p>

              <h2>10. Automated decision-making and profiling</h2>
              <p>We do not carry out automated decision-making or profiling based on the collected data.</p>

              <h2>11. Your rights</h2>
              <p>
                You may exercise your rights by writing to Marikomerc d.o.o., Grabi 54, 23241 Poličnik, Croatia, or via
                email at <a href='mailto:info@marikomerc.hr'>info@marikomerc.hr</a>.
              </p>
              <p>You have the right to request:</p>
              <ul className='legal__list'>
                <li>access to your personal data,</li>
                <li>rectification of inaccurate or incomplete data,</li>
                <li>erasure of data,</li>
                <li>restriction of processing,</li>
                <li>data portability to another controller,</li>
                <li>withdrawal of consent at any time,</li>
                <li>objection to processing (especially for marketing),</li>
                <li>lodging a complaint with the supervisory authority.</li>
              </ul>
              <p>
                Certain exceptions may apply pursuant to Article 17(3) GDPR. If you believe your data is processed
                unlawfully, you may lodge a complaint with the Croatian Data Protection Agency (AZOP), Ulica Metela
                Ožegovića 16, 10000 Zagreb.
              </p>

              <h2>12. Cookies</h2>
              <p>
                Our website uses cookies to ensure proper operation and improve user experience. Cookies are small files
                stored by your browser on your device. They are not used to spy on users, do not track everything a user
                does, are not malware, and do not store usernames/passwords.
              </p>
              <p>We use the following cookies:</p>
              <ul className='legal__list'>
                <li>
                  <strong>Strictly necessary cookies</strong> – essential for site functionality (navigation, secure
                  areas, correct rendering). Without them, the site cannot function properly.
                </li>
                <li>
                  <strong>Analytics and statistics cookies</strong> – Google Analytics in aggregated form (visitor
                  counts, popular pages, visit duration, device/browser information). These do not identify individuals.
                </li>
                <li>
                  <strong>Functional cookies</strong> – remember your preferences (language, font size, location) to
                  improve your experience.
                </li>
                <li>
                  <strong>Third-party marketing cookies</strong> – currently not used; may be introduced in future only
                  with your consent.
                </li>
              </ul>

              <h2>13. How to contact us</h2>
              <p>
                Marikomerc d.o.o., Grabi 54, 23241 Poličnik, Croatia
                <br />
                VAT ID (OIB): 02359254184
                <br />
                Email: <a href='mailto:info@marikomerc.hr'>info@marikomerc.hr</a>
              </p>

              <h2>14. Technical and organisational measures</h2>
              <p>
                We apply strict security procedures to minimise risks of data destruction, unauthorised disclosure,
                access or other breaches. Equipment is kept in a secure environment with limited physical access.
              </p>
              <p>
                We use firewalls, strong passwords, anti-virus software and other safeguards. Only authorised personnel
                have access to personal data, governed by internal acts and confidentiality obligations.
              </p>

              <h2>15. Changes to this Notice</h2>
              <p>
                We regularly update this Notice to keep it accurate and current, and reserve the right to amend it where
                necessary. Any changes will be communicated in a timely manner on our website in line with the principle
                of transparency.
              </p>

              <p className='legal__note'>
                VAT ID (OIB): 02359254184 • Approved veterinary facility number: HR2966EU • Timocom ID: 227763 •
                Registered at the Commercial Court in Zadar, MBS 060079376 • Share capital HRK 4,212,500.00 paid in full
                • IBAN HR8024020061100078207 (Erste &amp; Steiermärkische Bank d.d.)
              </p>
            </>
          )}
        </div>
      </article>
    </Layout>
  );
}
