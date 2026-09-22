import Link from "next/link";
import { getSalesHistory } from "@/lib/billing";

const statusStyle = {
  completed: "bg-green-100 text-green-700",
  due: "bg-amber-100 text-amber-700",
  cancelled: "bg-red-100 text-red-600",
};

const SalesHistoryPage = async () => {
  const res = await getSalesHistory();
  const sales = res.success ? res.sales : [];

  return (
    <div className="p-3 space-y-4">
      <h1 className="text-xl font-semibold text-black/80">Sales History</h1>

      {!res.success && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {res.message}
        </p>
      )}

      <div className="bg-white border border-black/10 rounded-xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-black/5 text-black/60 text-left">
            <tr>
              <th className="px-4 py-3">Invoice</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Due</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {sales.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-black/40">
                  No sales recorded yet
                </td>
              </tr>
            )}

            {sales.map((s) => (
              <tr key={s._id} className="border-t border-black/5">
                <td className="px-4 py-3">
                  <Link
                    href={`/dashboard/user/sales/invoices/${s._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {s.invoiceNo}
                  </Link>
                </td>
                <td className="px-4 py-3">{s.customerName}</td>
                <td className="px-4 py-3">
                  {s.createdAt
                    ? new Date(s.createdAt).toLocaleDateString()
                    : "-"}
                </td>
                <td className="px-4 py-3">৳ {s.totalAmount}</td>
                <td className="px-4 py-3">
                  {s.dueAmount > 0 ? (
                    <span className="text-amber-600">৳ {s.dueAmount}</span>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${statusStyle[s.status] || statusStyle.completed}`}
                  >
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesHistoryPage;
