"use client";
// Route: /dashboard/user/stock (Stock Overview)
// সব product এর বর্তমান stock quantity এখানে দেখা যাবে, low stock গুলো হাইলাইট হবে

import React, { useEffect, useState } from "react";

const StockOverviewPage = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // API route: GET /api/user/stock  (products কে stockQuantity সহ রিটার্ন করবে)
  //   const fetchStock = async () => {
  //     const res = await fetch("/api/user/stock");
  //     setProducts(await res.json());
  //   };
  //   fetchStock();
  // }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold text-black/80">Stock Overview</h1>

      <div className="bg-white border border-black/10 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-black/5 text-black/60 text-left">
            <tr>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Current Stock</th>
              <th className="px-4 py-3">Low Stock Alert</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* {products.map((p) => {
              const isLow = p.stockQuantity <= p.lowStockAlert;
              return (
                <tr key={p._id} className="border-t border-black/5">
                  <td className="px-4 py-3">{p.name}</td>
                  <td className="px-4 py-3">
                    {p.stockQuantity} {p.unit}
                  </td>
                  <td className="px-4 py-3">{p.lowStockAlert}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${isLow ? "bg-red-100 text-red-600" : "bg-green-100 text-green-700"}`}
                    >
                      {isLow ? "Low Stock" : "OK"}
                    </span>
                  </td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockOverviewPage;
