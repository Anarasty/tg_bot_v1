import { useEffect, useState } from "react";
import DataTable from "./components/DataTable/DataTable";
import ActionToolbar from "./components/ActionToolbar/ActionToolbar";

const API_URL = import.meta.env.VITE_API_URL || "/api";
let submissionsRequest;

function fetchSubmissions(forceRefresh = false) {
  if (!submissionsRequest || forceRefresh) {
    submissionsRequest = fetch(`${API_URL}/submissions`).then(
      async (response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const result = await response.json();
        if (!Array.isArray(result)) {
          throw new Error("The submissions response must be an array");
        }

        return result;
      },
    );
  }

  return submissionsRequest;
}

function formatSubmittedDate(value) {
  if (!value) return "";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

function normalizeSubmission(submission) {
  return {
    platform: submission.Platform ?? submission.platform ?? "",
    fullName: submission["Full Name"] ?? submission.fullName ?? "",
    iban: submission.IBAN ?? submission.iban ?? "",
    ibanProblem: submission["IBAN Problem"] ?? submission.ibanProblem ?? "",
    taxId: submission["Tax ID"] ?? submission.taxId ?? "",
    phone: submission.Phone ?? submission.phone ?? "",
    submittedDate: formatSubmittedDate(
      submission["Submitted date"] ?? submission.submittedDate,
    ),
  };
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark",
  );
  const [submissions, setSubmissions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    let shouldUpdate = true;

    async function loadSubmissions() {
      setIsLoading(true);
      setError("");

      try {
        const result = await fetchSubmissions(reloadKey > 0);

        if (shouldUpdate) {
          setSubmissions(result.map(normalizeSubmission));
        }
      } catch {
        if (shouldUpdate) {
          setError(
            "Could not load submissions. Check that the API is running.",
          );
        }
      } finally {
        if (shouldUpdate) setIsLoading(false);
      }
    }

    loadSubmissions();

    return () => {
      shouldUpdate = false;
    };
  }, [reloadKey]);

  function handleLogout() {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    window.dispatchEvent(new CustomEvent("app:logout"));
  }

  return (
    <main className="app">
      <DataTable
        data={submissions}
        isLoading={isLoading}
        error={error}
        onRetry={() => setReloadKey((key) => key + 1)}
      />
      <ActionToolbar
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode((current) => !current)}
        downloadUrl={`${API_URL}/submissions.csv`}
        onLogout={handleLogout}
      />
    </main>
  );
}

export default App;
