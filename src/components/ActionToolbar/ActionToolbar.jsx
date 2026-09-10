import { useState } from "react";
import { Download, LoaderCircle, LogOut, Moon, Sun } from "lucide-react";
import "./ActionToolbar.css";

function getDownloadFilename(response, downloadUrl) {
  const disposition = response.headers.get("content-disposition") ?? "";
  const encodedName = disposition.match(/filename\*=UTF-8''([^;]+)/i)?.[1];
  const plainName = disposition.match(/filename="?([^";]+)"?/i)?.[1];

  if (encodedName) {
    try {
      return decodeURIComponent(encodedName);
    } catch {
      return encodedName;
    }
  }

  if (plainName) return plainName;

  const pathName = new URL(downloadUrl, window.location.href).pathname;
  return pathName.split("/").filter(Boolean).pop() || "submissions.xlsx";
}

function ActionToolbar({ isDarkMode, onThemeToggle, downloadUrl, onLogout }) {
  const [isDownloading, setIsDownloading] = useState(false);

  async function handleDownload() {
    if (isDownloading) return;

    setIsDownloading(true);

    try {
      const response = await fetch(downloadUrl);

      if (!response.ok) {
        throw new Error(`Download failed with status ${response.status}`);
      }

      const file = await response.blob();
      const objectUrl = URL.createObjectURL(file);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = getDownloadFilename(response, downloadUrl);
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(objectUrl);
    } catch (error) {
      console.error("Failed to download submissions:", error);
    } finally {
      setIsDownloading(false);
    }
  }

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

      <button
        className="action-toolbar-button"
        type="button"
        onClick={handleDownload}
        disabled={isDownloading}
        aria-label="Download submissions file"
        title={isDownloading ? "Downloading…" : "Download submissions file"}
      >
        {isDownloading ? (
          <LoaderCircle className="action-toolbar-spinner" aria-hidden="true" />
        ) : (
          <Download aria-hidden="true" />
        )}
      </button>

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
