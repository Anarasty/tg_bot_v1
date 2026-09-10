import { Download, LogOut, Moon, Sun } from "lucide-react";
import "./ActionToolbar.css";

function ActionToolbar({ isDarkMode, onThemeToggle, workbookUrl, onLogout }) {
  return (
    <aside className="action-toolbar" aria-label="Page actions">
      <button
        className="action-toolbar-button"
        type="button"
        onClick={onThemeToggle}
        aria-label={isDarkMode ? "Turn on light mode" : "Turn on dark mode"}
        title={isDarkMode ? "Light mode" : "Dark mode"}
      >
        {isDarkMode ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
      </button>

      <a
        className="action-toolbar-button"
        href={workbookUrl}
        download="submitted-applications.xlsx"
        aria-label="Download Excel file"
        title="Download Excel file"
      >
        <Download aria-hidden="true" />
      </a>

      <div className="action-toolbar-divider" />

      <button
        className="action-toolbar-button action-toolbar-button--logout"
        type="button"
        onClick={onLogout}
        aria-label="Log out"
        title="Log out"
      >
        <LogOut aria-hidden="true" />
      </button>
    </aside>
  );
}

export default ActionToolbar;
