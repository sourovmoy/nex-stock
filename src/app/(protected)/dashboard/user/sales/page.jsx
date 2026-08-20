"use client";
// Route: /dashboard/user/sales (Sales History)

import React, { useEffect, useState } from "react";
import Link from "next/link";

const statusStyle = {
  completed: "bg-green-100 text-green-700",
  due: "bg-amber-100 text-amber-700",
  cancelled: "bg-red-100 text-red-600",
};

const SalesHistoryPage = () => {
  const [sales, setSales] = useState([]);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold text-black/80">Sales History</h1>

      <div className="bg-white border border-black/10 rounded-xl overflow-hidden">
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
            {/* {sales.map((s) => (
              <tr key={s._id} className="border-t border-black/5">
                <td className="px-4 py-3">
                  <Link
                    href={`/dashboard/user/sales/invoices/${s._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {s.invoiceNo}
                  </Link>
                </td>
                <td className="px-4 py-3">{s.customerId?.name || "Walk-in"}</td>
                <td className="px-4 py-3">
                  {new Date(s.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">৳ {s.totalAmount}</td>
                <td className="px-4 py-3">৳ {s.dueAmount}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${statusStyle[s.status]}`}
                  >
                    {s.status}
                  </span>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesHistoryPage;
