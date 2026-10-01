import axios from "axios";

const DEFAULT_TEST_BASE_URL = "http://185.168.118.6:54777";

export default function TestApiPage({ data, error, meta }) {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 24,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        background: "#f6f8fa",
        color: "#111827",
      }}
    >
      <h1 style={{ marginBottom: 8 }}>VENIO test API</h1>
      <p style={{ marginTop: 0, color: "#4b5563" }}>
        {meta.method} {meta.url}
      </p>
      <p style={{ color: error ? "#b91c1c" : "#047857" }}>
        Status: {error ? "Greška" : meta.status}
      </p>

      <pre
        style={{
          overflow: "auto",
          padding: 16,
          border: "1px solid #d1d5db",
          borderRadius: 6,
          background: "#ffffff",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {JSON.stringify(error || data, null, 2)}
      </pre>
    </main>
  );
}

export async function getServerSideProps({ query, res }) {
  if (
    process.env.NODE_ENV === "production" &&
    process.env.ENABLE_TEST_API_PAGE !== "true"
  ) {
    return { notFound: true };
  }

  const date = typeof query.date === "string" ? query.date : getZagrebDate();
  const grupaArtiklId =
    typeof query.grupaArtiklId === "string" ? query.grupaArtiklId : "21";
  const grupaNaziv =
    typeof query.grupaNaziv === "string" ? query.grupaNaziv : "Brand";
  const includeFilters = query.filters !== "false";
  const baseUrl =
    process.env.TEST_VENIO_API_BASE_URL ||
    process.env.VENIO_API_BASE_URL ||
    DEFAULT_TEST_BASE_URL;
  const username = process.env.VENIO_API_USERNAME;
  const password = process.env.VENIO_API_PASSWORD;
  const url = buildVenioUrl(baseUrl, {
    date,
    grupaArtiklId,
    grupaNaziv,
    includeFilters,
  });

  res.setHeader("Cache-Control", "no-store, max-age=0");

  if (!username || !password) {
    return {
      props: {
        data: null,
        error: {
          message:
            "Missing VENIO_API_USERNAME or VENIO_API_PASSWORD in local environment.",
        },
        meta: { method: "GET", url, status: null },
      },
    };
  }

  try {
    const response = await axios.get(url, {
      auth: { username, password },
      headers: { Accept: "application/json" },
      timeout: 20000,
    });

    return {
      props: {
        data: response.data,
        error: null,
        meta: { method: "GET", url, status: response.status },
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
        error: serializeAxiosError(error),
        meta: {
          method: "GET",
          url,
          status: error.response?.status || null,
        },
      },
    };
  }
}

function buildVenioUrl(baseUrl, options) {
  const url = new URL(baseUrl);
  const basePath = url.pathname.replace(/\/+$/, "");
  url.pathname = `${basePath}/MaloprodajaCjenik/CjenikWebNovo/Skladiste/T003/${options.date}`.replace(
    /\/{2,}/g,
    "/"
  );
  if (options.includeFilters) {
    url.searchParams.set("grupaArtiklId", options.grupaArtiklId);
    url.searchParams.set("grupaNaziv", options.grupaNaziv);
  }
  return url.toString();
}

function getZagrebDate() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Zagreb",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const value = (type) => parts.find((part) => part.type === type)?.value;
  return `${value("year")}-${value("month")}-${value("day")}`;
}

function serializeAxiosError(error) {
  return {
    message: error.message,
    code: error.code || null,
    status: error.response?.status || null,
    statusText: error.response?.statusText || null,
    response: error.response?.data || null,
  };
}
