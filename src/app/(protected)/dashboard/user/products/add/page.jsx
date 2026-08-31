"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { addProducts, getCategory } from "@/lib/products";
import Swal from "sweetalert2";

const AddProductPage = () => {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [categories, setCategories] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(true);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategory();
        setCategories(data || []);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCategories = categories.filter((c) =>
    c.name.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const handleSelectCategory = (categoryName) => {
    setInputValue(categoryName);
    setShowSuggestions(false);
  };

  const handleSubmit = async (e) => {
    setSaving(true);
    e.preventDefault();
    const name = e.target.name.value;
    const sku = e.target.sku.value;
    const categoryId = e.target.categoryId.value;
    const costPrice = Number(e.target.costPrice.value);
    const sellPrice = Number(e.target.sellPrice.value);
    const stockQuantity = Number(e.target.stockQuantity.value);
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
      if (res.success) {
        e.target.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${res.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: `${res.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
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
              required
              className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
            />
          </div>
          <div className="relative" ref={wrapperRef}>
            <label className="text-xs text-black/50">Category</label>
            <input
              type="text"
              name="categoryId"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              placeholder={
                loading ? "Loading categories..." : "Select Category"
              }
              autoComplete="off"
              required
              disabled={loading}
              className="w-full mt-1 px-3 py-2 border border-black/10 rounded-lg text-sm disabled:opacity-50"
            />

            {showSuggestions && filteredCategories.length > 0 && (
              <ul className="absolute z-10 w-full mt-1 bg-white border border-black/10 rounded-lg shadow-md max-h-48 overflow-y-auto">
                {filteredCategories.map((c) => (
                  <li
                    key={c._id}
                    onClick={() => handleSelectCategory(c.name)}
                    className="px-3 py-2 text-sm hover:bg-black/5 cursor-pointer"
                  >
                    {c.name}
                  </li>
                ))}
              </ul>
            )}

            {showSuggestions &&
              inputValue &&
              filteredCategories.length === 0 &&
              !loading && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-black/10 rounded-lg shadow-md px-3 py-2 text-sm text-black/50">
                  &quot;{inputValue}&quot; Added as a new category
                </div>
              )}
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
