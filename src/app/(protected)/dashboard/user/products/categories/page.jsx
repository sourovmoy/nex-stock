"use client";
// Route: /dashboard/user/products/categories (Categories)

import React, { useEffect, useState } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  // useEffect(() => {
  //   // API route: GET /api/user/categories
  //   const fetchCategories = async () => {
  //     const res = await fetch("/api/user/categories");
  //     setCategories(await res.json());
  //   };
  //   fetchCategories();
  // }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    // API route: POST /api/user/categories
    // const res = await fetch("/api/user/categories", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name }),
    // });
    const newCategory = await res.json();
    setCategories((prev) => [...prev, newCategory]);
    setName("");
  };

  const handleDelete = async (id) => {
    // API route: DELETE /api/user/categories/:id
    // await fetch(`/api/user/categories/${id}`, { method: "DELETE" });
    // setCategories((prev) => prev.filter((c) => c._id !== id));
  };

  return (
    <div className="p-3 space-y-4">
      <h1 className="text-xl font-semibold text-black/80">Categories</h1>

      <form onSubmit={handleAdd} className="flex gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="নতুন category নাম"
          className="flex-1 px-3 py-2 border border-black/10 rounded-lg text-sm"
        />
        <button className="flex items-center gap-1 bg-black text-white text-sm px-4 py-2 rounded-lg">
          <FiPlus /> Add
        </button>
      </form>

      <div className="bg-white border border-black/10 rounded-xl divide-y divide-black/5">
        {/* {categories.map((c) => (
          <div
            key={c._id}
            className="flex items-center justify-between px-4 py-3"
          >
            <span className="text-sm text-black/80">{c.name}</span>
            <button
              onClick={() => handleDelete(c._id)}
              className="text-red-500"
            >
              <FiTrash2 size={15} />
            </button>
          </div>
        ))}
        {categories.length === 0 && (
          <p className="px-4 py-6 text-center text-sm text-black/40">
            কোনো category নেই
          </p>
        )} */}
      </div>
    </div>
  );
};

export default CategoriesPage;
