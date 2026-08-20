"use client";
// Route: /dashboard/user/stock/history (Stock History)
// stock in/out/adjustment এর সব log এখানে দেখানো হয়

import React, { useEffect, useState } from "react";

const typeStyle = {
  in: "bg-green-100 text-green-700",
  out: "bg-red-100 text-red-600",
  adjustment: "bg-amber-100 text-amber-700",
};

const StockHistoryPage = () => {
  // const [history, setHistory] = useState([]);

  // useEffect(() => {
  //   // API route: GET /api/user/stock/history
  //   const fetchHistory = async () => {
  //     const res = await fetch("/api/user/stock/history");
  //     setHistory(await res.json());
  //   };
  //   fetchHistory();
  // }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold text-black/80">Stock History</h1>

      <div className="bg-white border border-black/10 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-black/5 text-black/60 text-left">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Change</th>
              <th className="px-4 py-3">Prev → New</th>
              <th className="px-4 py-3">Reason</th>
            </tr>
          </thead>
          <tbody>
            {/* {history.map((h) => (
              <tr key={h._id} className="border-t border-black/5">
                <td className="px-4 py-3">
                  {new Date(h.createdAt).toLocaleString()}
                </td>
                <td className="px-4 py-3">{h.productId?.name || "-"}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${typeStyle[h.type]}`}
                  >
                    {h.type}
                  </span>
                </td>
                <td className="px-4 py-3">{h.quantity}</td>
                <td className="px-4 py-3">
                  {h.previousStock} → {h.newStock}
                </td>
                <td className="px-4 py-3 text-black/50">{h.reason}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockHistoryPage;
