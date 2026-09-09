"use client";

import React, { useRef, useState } from "react";
import { addProducts } from "@/lib/products";
import Swal from "sweetalert2";

export default function ProductForm({ initialCategories = [] }) {
  const [saving, setSaving] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({
    id: "",
    name: "",
  });
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);

  // Click outside listener for custom dropdown
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCategories = initialCategories.filter((c) =>
    c.name?.toLowerCase().includes(selectedCategory.name.toLowerCase()),
  );

  const handleSelectCategory = (category) => {
    setSelectedCategory({ id: category._id, name: category.name });
    setShowSuggestions(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const form = e.target;
    const newProduct = {
      name: form.name.value,
      sku: form.sku.value,
      categoryId: selectedCategory.id || selectedCategory.name,
      costPrice: Number(form.costPrice.value),
      sellPrice: Number(form.sellPrice.value),
      stockQuantity: Number(form.stockQuantity.value),
    };

    try {
      const res = await addProducts(newProduct);
      if (res?.success) {
        form.reset();
        setSelectedCategory({ id: "", name: "" });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: res.message || "Product added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: res?.message || "Failed to add product",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something went wrong!",
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-black/10 rounded-xl p-6 space-y-4 shadow-sm"
    >
      <div>
        <label className="text-xs text-black/50 font-medium">
          Product Name
        </label>
        <input
          name="name"
          required
          placeholder="e.g. Wireless Mouse"
          className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-black/50 font-medium">
            SKU / Code
          </label>
          <input
            name="sku"
            required
            placeholder="PROD-001"
            className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="relative" ref={wrapperRef}>
          <label className="text-xs text-black/50 font-medium">Category</label>
          <input
            type="text"
            value={selectedCategory.name}
            onChange={(e) => {
              setSelectedCategory({ id: "", name: e.target.value });
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Select Category"
            autoComplete="off"
            required
            className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {showSuggestions && filteredCategories.length > 0 && (
            <ul className="absolute z-10 w-full mt-1 bg-white border border-black/10 rounded-lg shadow-md max-h-48 overflow-y-auto">
              {filteredCategories.map((c) => (
                <li
                  key={c._id}
                  onClick={() => handleSelectCategory(c)}
                  className="px-3 py-2 text-sm hover:bg-black/5 cursor-pointer transition-colors"
                >
                  {c.name}
                </li>
              ))}
            </ul>
          )}

          {showSuggestions &&
            selectedCategory.name &&
            filteredCategories.length === 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-black/10 rounded-lg shadow-md px-3 py-2 text-sm text-black/50">
                &quot;{selectedCategory.name}&quot; will be added as a new
                category
              </div>
            )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="text-xs text-black/50 font-medium">
            Cost Price
          </label>
          <input
            type="number"
            name="costPrice"
            required
            min="0"
            step="any"
            className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="text-xs text-black/50 font-medium">
            Sell Price
          </label>
          <input
            type="number"
            name="sellPrice"
            required
            min="0"
            step="any"
            className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="text-xs text-black/50 font-medium">
            Stock Quantity
          </label>
          <input
            type="number"
            name="stockQuantity"
            required
            min="0"
            className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={saving}
        className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg disabled:opacity-50 transition-colors"
      >
        {saving ? "Saving..." : "Save Product"}
      </button>
    </form>
  );
}
