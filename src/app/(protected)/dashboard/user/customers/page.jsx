"use client";
import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [showForm, setShowForm] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // API route: POST /api/user/customers
  //   const res = await fetch("/api/user/customers", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(form),
  //   });
  //   const newCustomer = await res.json();
  //   setCustomers((prev) => [...prev, newCustomer]);
  //   setForm({ name: "", phone: "", address: "" });
  //   setShowForm(false);
  // };
  console.log(showForm);

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-black/80">Customers</h1>
        <button
          onClick={() => setShowForm((v) => !v)}
          className="flex items-center gap-2 bg-blue-400 text-white text-sm px-4 py-2 rounded-lg"
        >
          <FiPlus /> Add Customer
        </button>
      </div>

      {showForm && (
        <form
          // onSubmit={handleSubmit}
          className="bg-white border border-black/10 rounded-xl p-4 grid grid-cols-3 gap-3"
        >
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="px-3 py-2 border border-black/10 rounded-lg text-sm"
            required
          />
          <input
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="px-3 py-2 border border-black/10 rounded-lg text-sm"
          />
          <input
            placeholder="Address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            className="px-3 py-2 border border-black/10 rounded-lg text-sm"
          />
          <button className="col-span-3 bg-blue-400 text-white text-sm py-2 rounded-lg">
            Save
          </button>
        </form>
      )}

      <div className="bg-white border border-black/10 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-black/5 text-black/60 text-left">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3">Due</th>
            </tr>
          </thead>
          <tbody>
            {/* {customers.map((c) => (
              <tr key={c._id} className="border-t border-black/5">
                <td className="px-4 py-3">{c.name}</td>
                <td className="px-4 py-3">{c.phone}</td>
                <td className="px-4 py-3">{c.address}</td>
                <td className="px-4 py-3">
                  <span
                    className={c.totalDue > 0 ? "text-red-500 font-medium" : ""}
                  >
                    ৳ {c.totalDue}
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

export default CustomersPage;
