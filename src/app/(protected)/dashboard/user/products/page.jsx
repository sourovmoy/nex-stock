"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiPlusCircle, FiEdit2, FiTrash2 } from "react-icons/fi";
import { deleteProduct, getProducts } from "@/lib/products";
import Swal from "sweetalert2";

const LOW_STOCK_THRESHOLD = 10;

const ProductsListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await getProducts();

      if (res.success) {
        setProducts(res.products);
      } else {
        setErrorMsg(res.message || "Products লোড করতে সমস্যা হয়েছে");
      }
      setLoading(false);
    };
    fetchProducts();
  }, [refetch]);

  const handleDelete = async (category, id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (!result.isConfirmed) return;
    try {
      const res = await deleteProduct(category, id);

      Swal.fire({
        title: "Deleted!",
        text: `${res.message}`,
        icon: "success",
      });
      setRefetch(!refetch);
    } catch (error) {
      Swal.fire({
        title: "Deleted!",
        text: `${error.message}`,
        icon: "success",
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-black/80">All Products</h1>
        <Link
          href="/dashboard/user/products/add"
          className="flex items-center gap-2 bg-blue-400 text-white text-sm px-4 py-2 rounded-lg"
        >
          <FiPlusCircle /> Add Product
        </Link>
      </div>

      {errorMsg && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {errorMsg}
        </p>
      )}

      <div className="bg-white border border-black/10 rounded-xl overflow-scroll">
        <table className="w-full text-sm">
          <thead className="bg-black/5 text-black/60 text-left">
            <tr>
              <th className="px-2 py-3">Name</th>
              <th className="px-2 py-3">Category</th>
              <th className="px-2 py-3">Price</th>
              <th className="px-2 py-3">Stock</th>
              <th className="px-2 py-3">Status</th>
              <th className="px-2 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-black/40">
                  Loading...
                </td>
              </tr>
            )}

            {!loading && products.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-black/40">
                  কোনো product যোগ করা হয়নি
                </td>
              </tr>
            )}

            {!loading &&
              products.map((p) => {
                const isLowStock = p.stockQuantity <= LOW_STOCK_THRESHOLD;
                const isOutOfStock = p.stockQuantity <= 0;

                return (
                  <tr key={p._id} className="border-t border-black/5">
                    <td className="px-2 py-3">{p.name}</td>
                    <td className="px-2 py-3">{p.category}</td>
                    <td className="py-3">৳ {p.sellPrice}</td>
                    <td className="px-2 py-3">
                      <span
                        className={isLowStock ? "text-red-500 font-medium" : ""}
                      >
                        {p.stockQuantity}
                      </span>
                    </td>
                    <td className="py-3">
                      <span
                        className={`text-xs px-1 py-1 rounded-full ${
                          isOutOfStock
                            ? "bg-red-100 text-red-600"
                            : isLowStock
                              ? "bg-amber-100 text-amber-700"
                              : "bg-green-100 text-green-700"
                        }`}
                      >
                        {isOutOfStock
                          ? "Out of Stock"
                          : isLowStock
                            ? "Low Stock"
                            : "In Stock"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right space-x-2">
                      {/* <Link
                        href={`/dashboard/user/products/edit/${p._id}`}
                        className="text-black/50 hover:text-black inline-block"
                      >
                        <FiEdit2 size={15} />
                      </Link> */}
                      <button
                        onClick={() => handleDelete(p.category, p._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FiTrash2 size={15} />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsListPage;
