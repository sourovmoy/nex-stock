"use client";
// Route: /dashboard/user/products/add (Add Product)

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AddProductPage = () => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: "",
    sku: "",
    categoryId: "",
    unit: "pcs",
    costPrice: "",
    sellPrice: "",
    stockQuantity: "",
    lowStockAlert: 5,
  });
  const [saving, setSaving] = useState(false);

  // useEffect(() => {
  //   // API route: GET /api/user/categories
  //   const fetchCategories = async () => {
  //     const res = await fetch("/api/user/categories");
  //     setCategories(await res.json());
  //   };
  //   fetchCategories();
  // }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    // API route: POST /api/user/products
    // const res = await fetch("/api/user/products", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    setSaving(false);
    // if (res.ok) router.push("/dashboard/user/products");
  };

  return (
    <div className="p-3">
      <h1 className="text-xl font-semibold text-black/80 mb-4">Add Product</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-black/10 rounded-xl p-6 space-y-4"
      >
        <div>
          <label className="text-xs text-black/50">Product Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-black/50">SKU / Code</label>
            <input
              name="sku"
              value={form.sku}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-black/50">Category</label>
            <select
              name="categoryId"
              value={form.categoryId}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
            >
              <option value="">Select category</option>
              {categories.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="text-xs text-black/50">Cost Price</label>
            <input
              type="number"
              name="costPrice"
              value={form.costPrice}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-black/50">Sell Price</label>
            <input
              type="number"
              name="sellPrice"
              value={form.sellPrice}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-black/50">Stock Quantity</label>
            <input
              type="number"
              name="stockQuantity"
              value={form.stockQuantity}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="bg-black text-white text-sm px-5 py-2.5 rounded-lg disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
