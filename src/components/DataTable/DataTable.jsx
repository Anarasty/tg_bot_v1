import { useState } from "react";
import "./DataTable.css";

const PAGE_SIZE = 15;

const columns = [
  { key: "platform", label: "Platform" },
  { key: "fullName", label: "Full Name" },
  { key: "iban", label: "IBAN" },
  { key: "ibanProblem", label: "IBAN Problem" },
  { key: "taxId", label: "Tax ID" },
  { key: "phone", label: "Phone" },
  { key: "submittedDate", label: "Submitted date" },
];

function maskIban(iban) {
  const groups = iban.split(" ");

  return groups
    .map((group, index) => {
      const shouldMask = index > 1 && index < groups.length - 1;
      return shouldMask ? "*".repeat(group.length) : group;
    })
    .join(" ");
}

function maskTaxId(taxId) {
  const value = String(taxId);

  if (value.length <= 6) return "*".repeat(value.length);

  return `${value.slice(0, 4)}${"*".repeat(value.length - 6)}${value.slice(-2)}`;
}

function DataTable({ data }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleRows = data.slice(0, visibleCount);
  const hasMoreRows = visibleCount < data.length;

  function getCellValue(row, key) {
    if (key === "iban") return maskIban(row[key]);
    if (key === "taxId") return maskTaxId(row[key]);

    return row[key];
  }

  return (
    <section className="data-table-card" aria-labelledby="submissions-title">
      <div className="data-table-header">
        <div>
          <p className="data-table-eyebrow">Telegram</p>
          <h1 id="submissions-title">Submitted applications</h1>
        </div>
        <span className="data-table-count">{data.length} records</span>
      </div>

      <div className="data-table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key} scope="col">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleRows.map((row) => (
              <tr key={`${row.taxId}-${row.submittedDate}`}>
                {columns.map((column) => (
                  <td key={column.key}>{getCellValue(row, column.key)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {hasMoreRows && (
        <div className="data-table-footer">
          <button
            className="data-table-show-more"
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
          >
            Show more
          </button>
        </div>
      )}
    </section>
  );
}

export default DataTable;
