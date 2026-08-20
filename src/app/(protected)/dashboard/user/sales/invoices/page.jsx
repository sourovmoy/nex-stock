"use client";
// Route: /dashboard/user/sales/invoices/[id] (Invoice detail / print view)

import React, { useEffect, useState } from "react";
import { FiPrinter } from "react-icons/fi";

const InvoicesPage = ({ saleId }) => {
  const [sale, setSale] = useState(null);

  // useEffect(() => {
  //   // API route: GET /api/user/sales/:id
  //   const fetchSale = async () => {
  //     const res = await fetch(`/api/user/sales/${saleId}`);
  //     setSale(await res.json());
  //   };
  //   if (saleId) fetchSale();
  // }, [saleId]);

  // if (!sale)
  //   return <p className="p-6 text-sm text-black/50">Loading invoice...</p>;

  return (
    <div className="p-3">
      <div className="bg-white border border-black/10 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-semibold text-black/80">
            {/* Invoice #{sale.invoiceNo || 0} */}
          </h1>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 text-sm text-black/60"
          >
            <FiPrinter /> Print
          </button>
        </div>

        <p className="text-xs text-black/50 mb-4">
          {/* {new Date(sale.createdAt).toLocaleString()} •{" "}
          {sale.customerId?.name || "Walk-in Customer"} */}
        </p>

        <table className="w-full text-sm mb-4">
          <thead className="text-black/50 text-left border-b border-black/10">
            <tr>
              <th className="py-2">Item</th>
              <th className="py-2">Qty</th>
              <th className="py-2 text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {/* {sale.items.map((item, idx) => (
              <tr key={idx} className="border-b border-black/5">
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.quantity}</td>
                <td className="py-2 text-right">৳ {item.subtotal}</td>
              </tr>
            ))} */}
          </tbody>
        </table>

        <div className="space-y-1 text-sm text-right">
          {/* <p>Subtotal: ৳ {sale.subtotal}</p>
          <p>Discount: ৳ {sale.discount}</p>
          <p className="font-semibold">Total: ৳ {sale.totalAmount}</p>
          <p>Paid: ৳ {sale.paidAmount}</p>
          <p className="text-red-500">Due: ৳ {sale.dueAmount}</p> */}
        </div>
      </div>
    </div>
  );
};

export default InvoicesPage;
