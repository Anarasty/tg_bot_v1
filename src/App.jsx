import { useEffect, useState } from "react";
import DataTable from "./components/DataTable/DataTable";
import ActionToolbar from "./components/ActionToolbar/ActionToolbar";
import mockData from "./mock data/mockData";
import workbookUrl from "./mock data/mock_data_updated.xlsx?url";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  function handleLogout() {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    window.dispatchEvent(new CustomEvent("app:logout"));
  }

  return (
    <main className="app">
      <DataTable data={mockData} />
      <ActionToolbar
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode((current) => !current)}
        workbookUrl={workbookUrl}
        onLogout={handleLogout}
      />
    </main>
  );
}

export default App;
