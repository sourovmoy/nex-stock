import { CheckCircle2, XCircle } from "lucide-react";

function CellValue({ value }) {
  if (typeof value === "boolean") {
    return value ? (
      <CheckCircle2 size={18} className="text-green-500 mx-auto" />
    ) : (
      <XCircle size={18} className="text-gray-300 mx-auto" />
    );
  }
  return <span className="font-medium text-gray-800">{value}</span>;
}

export default function ComparisonTable({ rows }) {
  return (
    <section className="px-6 mb-20">
      <h2 className="text-2xl font-semibold mb-8">Plan comparison</h2>
      <div className="border border-gray-100 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-5 py-3 text-gray-400 font-medium w-2/5">
                Feature
              </th>
              <th className="text-center px-5 py-3 text-gray-600 font-medium">
                Starter
              </th>
              <th className="text-center px-5 py-3 text-blue-600 font-semibold bg-blue-50/60">
                Pro
              </th>
              <th className="text-center px-5 py-3 text-gray-600 font-medium">
                Enterprise
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.feature}
                className={`border-b border-gray-50 last:border-0 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                }`}
              >
                <td className="px-5 py-3.5 text-gray-500">{row.feature}</td>
                <td className="px-5 py-3.5 text-center">
                  <CellValue value={row.starter} />
                </td>
                <td className="px-5 py-3.5 text-center bg-blue-50/30">
                  <CellValue value={row.pro} />
                </td>
                <td className="px-5 py-3.5 text-center">
                  <CellValue value={row.enterprise} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
