"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { updateProduct } from "@/lib/products";

const numberFields = ["costPrice", "sellPrice", "stockQuantity"];

const EditProductForm = ({ product }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: product.name,
    sku: product.sku,
    costPrice: product.costPrice,
    sellPrice: product.sellPrice,
    stockQuantity: product.stockQuantity,
  });
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: numberFields.includes(name) ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    startTransition(async () => {
      try {
        const res = await updateProduct({
          productId: product._id,
          category: product.category,
          ...form,
        });

        if (res.success) {
          await Swal.fire({ title: res.message, icon: "success" });
          router.push("/dashboard/user/products");
          router.refresh();
        } else {
          Swal.fire({ title: res.message, icon: "warning" });
        }
      } catch (error) {
        Swal.fire({
          title: "Failed to update product",
          text: error?.message,
          icon: "error",
        });
      }
    });
  };

  return (
    <div className="md:w-full space-y-4">
      <h1 className="text-xl font-semibold text-black/80">Edit Product</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white border border-black/10 rounded-xl p-4"
      >
        <div>
          <label className="text-xs text-black/50">Category</label>
          <input
            value={product.category}
            disabled
            className="w-full px-3 py-2 border border-black/10 rounded-lg text-sm bg-black/5 text-black/50"
          />
        </div>

        <div>
          <label className="text-xs text-black/50">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-black/10 rounded-lg text-sm"
          />
        </div>

        <div>
          <label className="text-xs text-black/50">SKU</label>
          <input
            name="sku"
            value={form.sku}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-black/10 rounded-lg text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-black/50">Cost Price</label>
            <input
              type="number"
              name="costPrice"
              value={form.costPrice}
              onChange={handleChange}
              min={0}
              step="0.01"
              required
              className="w-full px-3 py-2 border border-black/10 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-black/50">Sell Price</label>
            <input
              type="number"
              name="sellPrice"
              value={form.sellPrice}
              onChange={handleChange}
              min={0}
              step="0.01"
              required
              className="w-full px-3 py-2 border border-black/10 rounded-lg text-sm"
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-black/50">Stock Quantity</label>
          <input
            type="number"
            name="stockQuantity"
            value={form.stockQuantity}
            onChange={handleChange}
            min={0}
            required
            className="w-full px-3 py-2 border border-black/10 rounded-lg text-sm"
          />
        </div>

        <div className="flex gap-2 pt-2">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex-1 border border-black/10 text-black/70 py-2 rounded-lg text-sm hover:bg-black/5"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isPending}
            className="flex-1 bg-blue-400 text-white py-2 rounded-lg text-sm disabled:opacity-50"
          >
            {isPending ? "Saving..." : "Save changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;
