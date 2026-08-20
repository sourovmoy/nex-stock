"use client";
// Route: /dashboard/settings (Settings)

import React, { useEffect, useState } from "react";

const SettingsPage = () => {
  const [form, setForm] = useState({
    shopName: "",
    shopAddress: "",
    shopPhone: "",
    currency: "BDT",
    invoicePrefix: "INV-",
    taxRate: 0,
  });
  const [saving, setSaving] = useState(false);

  //   useEffect(() => {
  //     // API route: GET /api/user/settings
  //     const fetchSettings = async () => {
  //       const res = await fetch("/api/user/settings");
  //       const data = await res.json();
  //       if (data) setForm(data);
  //     };
  //     fetchSettings();
  //   }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    // API route: PUT /api/user/settings
    // await fetch("/api/user/settings", {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    setSaving(false);
  };

  return (
    <div className="p-3">
      <h1 className="text-xl font-semibold text-black/80 mb-4">Settings</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-black/10 rounded-xl p-6 space-y-4"
      >
        <div>
          <label className="text-xs text-black/50">Shop Name</label>
          <input
            name="shopName"
            value={form.shopName}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
          />
        </div>
        <div>
          <label className="text-xs text-black/50">Address</label>
          <input
            name="shopAddress"
            value={form.shopAddress}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-black/50">Phone</label>
            <input
              name="shopPhone"
              value={form.shopPhone}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-black/50">Currency</label>
            <input
              name="currency"
              value={form.currency}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-black/50">Invoice Prefix</label>
            <input
              name="invoicePrefix"
              value={form.invoicePrefix}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-black/50">Tax Rate (%)</label>
            <input
              type="number"
              name="taxRate"
              value={form.taxRate}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="bg-black text-white text-sm px-5 py-2.5 rounded-lg disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Settings"}
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
