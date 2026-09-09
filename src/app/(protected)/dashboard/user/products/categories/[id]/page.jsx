import { getCategoryProducts } from "@/lib/products";
import Link from "next/link";
import React from "react";
import { FiArrowLeft, FiEdit2, FiTrash2 } from "react-icons/fi";

const LOW_STOCK_THRESHOLD = 10;

const ParticularCategory = async ({ params }) => {
  const { id } = await params;
  if (!id) {
    return <div>Invalid Category</div>;
  }
  const category = decodeURIComponent(id);
  const { products, message: errorMsg = "" } =
    await getCategoryProducts(category);
  const res = await getCategoryProducts(category);
  console.log(res);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Link
          href="/dashboard/user/products/categories"
          className="text-black/50 hover:text-black"
        >
          <FiArrowLeft size={18} />
        </Link>
        <h1 className="text-xl font-semibold text-black/80">
          {category} <span className="text-black/40 font-normal">Products</span>
        </h1>
      </div>

      {errorMsg && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {errorMsg}
        </p>
      )}

      <div className="bg-white border border-black/10 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-black/5 text-black/60 text-left">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">SKU</th>
              <th className="px-4 py-3">Cost Price</th>
              <th className="px-4 py-3">Sell Price</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 && !errorMsg && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-black/40">
                  There is no product in this category
                </td>
              </tr>
            )}

            {products.map((p, index) => {
              const isLowStock = p.stockQuantity <= LOW_STOCK_THRESHOLD;
              const isOutOfStock = p.stockQuantity <= 0;

              return (
                <tr key={p._id} className="border-t border-black/5">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{p.name}</td>
                  <td className="px-4 py-3 text-black/50">{p.sku}</td>
                  <td className="px-4 py-3">৳ {p.costPrice}</td>
                  <td className="px-4 py-3">
                    ৳ {p.sellPrice}
                    {p.previousSellPrice &&
                      p.previousSellPrice !== p.sellPrice && (
                        <span className="text-xs text-black/40 line-through ml-1">
                          ৳ {p.previousSellPrice}
                        </span>
                      )}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={
                        isOutOfStock
                          ? "text-red-500 font-medium"
                          : isLowStock
                            ? "text-amber-600 font-medium"
                            : ""
                      }
                    >
                      {p.stockQuantity}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <button className="text-black/50 hover:text-black">
                      <FiEdit2 size={15} />
                    </button>
                    <button
                      //   onClick={() => handleDelete(p._id)}
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

export default ParticularCategory;
