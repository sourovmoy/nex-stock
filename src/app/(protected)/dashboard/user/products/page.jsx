"use client";
// Route: /dashboard/user/products (All Products)

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiPlusCircle, FiEdit2, FiTrash2 } from "react-icons/fi";

const ProductsListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // API route: GET /api/user/products
  //   const fetchProducts = async () => {
  //     const res = await fetch("/api/user/products");
  //     const data = await res.json();
  //     setProducts(data);
  //     setLoading(false);
  //   };
  //   fetchProducts();
  // }, []);

  const handleDelete = async (id) => {
    // if (!confirm("এই product টা delete করতে চান?")) return;
    // // API route: DELETE /api/user/products/:id
    // await fetch(`/api/user/products/${id}`, { method: "DELETE" });
    // setProducts((prev) => prev.filter((p) => p._id !== id));
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-black/80">All Products</h1>
        <Link
          href="/dashboard/user/products/add"
          className="flex items-center gap-2 bg-blue-400 text-white text-sm px-4 py-2 rounded-lg"
        >
          <FiPlusCircle /> Add Product
        </Link>
      </div>

      <div className="bg-white border border-black/10 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-black/5 text-black/60 text-left">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {loading && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-black/40">
                  Loading...
                </td>
              </tr>
            )} */}
            {/* {!loading &&
              products.map((p) => (
                <tr key={p._id} className="border-t border-black/5">
                  <td className="px-4 py-3">{p.name}</td>
                  <td className="px-4 py-3">{p.categoryId?.name || "-"}</td>
                  <td className="px-4 py-3">৳ {p.sellPrice}</td>
                  <td className="px-4 py-3">
                    <span
                      className={
                        p.stockQuantity <= p.lowStockAlert
                          ? "text-red-500 font-medium"
                          : ""
                      }
                    >
                      {p.stockQuantity}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${p.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <button className="text-black/50 hover:text-black">
                      <FiEdit2 size={15} />
                    </button>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsListPage;
