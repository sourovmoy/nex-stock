"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { addProducts } from "@/lib/products";

const AddProductPage = () => {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    setSaving(true);
    e.preventDefault();
    const name = e.target.name.value;
    const sku = e.target.sku.value;
    const categoryId = e.target.categoryId.value;
    const costPrice = e.target.costPrice.value;
    const sellPrice = e.target.sellPrice.value;
    const stockQuantity = e.target.stockQuantity.value;
    const newProducts = {
      name,
      sku,
      categoryId,
      costPrice,
      sellPrice,
      stockQuantity,
    };
    try {
      const res = await addProducts(newProducts);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    } finally {
      setSaving(false);
    }
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
            required
            className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-black/50">SKU / Code</label>
            <input
              name="sku"
              className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-black/50">Category</label>
            <select
              name="categoryId"
              // value={form.categoryId}
              // onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
            >
              <option value="">Select category</option>
              {/* {categories.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))} */}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="text-xs text-black/50">Cost Price</label>
            <input
              type="number"
              name="costPrice"
              required
              className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-black/50">Sell Price</label>
            <input
              type="number"
              name="sellPrice"
              required
              className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-black/50">Stock Quantity</label>
            <input
              type="number"
              name="stockQuantity"
              required
              className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="bg-blue-400 text-white text-sm px-5 py-2.5 rounded-lg disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
