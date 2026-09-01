"use client";
import { addCategory, getCategory } from "@/lib/products";
import React, { useEffect, useState } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
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

  const handleAdd = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      if (!name.trim()) return;
      const res = await addCategory(name);
      
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <p>Loading ....</p>;

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
        <button className="flex items-center gap-1 bg-blue-400 text-white text-sm px-4 py-2 rounded-lg">
          <FiPlus /> Add
        </button>
      </form>

      <div className="bg-white border border-black/10 rounded-xl divide-y divide-black/5">
        {categories.map((c, index) => (
          <div
            key={c._id}
            className="flex items-center justify-between px-4 py-3"
          >
            <div className="flex gap-10">
              <span className="text-sm text-black/80">{index + 1}</span>
              <span className="text-sm text-black/80">{c.name}</span>
            </div>
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
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
