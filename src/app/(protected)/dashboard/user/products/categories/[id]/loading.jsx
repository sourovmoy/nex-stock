import React from "react";

export default function CategoryProductsSkeleton() {
  return (
    <div className="bg-white border border-black/10 rounded-xl overflow-hidden shadow-sm">
      {/* Skeleton Header */}
      <div className="bg-black/5 px-4 py-3 grid grid-cols-6 gap-4 text-sm font-medium text-black/60">
        <div>Name</div>
        <div>SKU</div>
        <div>Cost Price</div>
        <div>Sell Price</div>
        <div>Stock</div>
        <div className="text-right">Action</div>
      </div>

      {/* Skeleton Rows */}
      <div className="divide-y divide-black/5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="px-4 py-3 grid grid-cols-7 gap-4 items-center animate-pulse"
          >
            <div>
              <div className="h-4 w-4 bg-black/10 rounded" />
            </div>
            <div>
              <div className="h-4 w-28 bg-black/10 rounded" />
            </div>
            <div>
              <div className="h-4 w-16 bg-black/10 rounded" />
            </div>
            <div>
              <div className="h-4 w-14 bg-black/10 rounded" />
            </div>
            <div>
              <div className="h-4 w-14 bg-black/10 rounded" />
            </div>
            <div>
              <div className="h-4 w-10 bg-black/10 rounded" />
            </div>
            <div className="flex justify-end gap-2">
              <div className="h-4 w-4 bg-black/10 rounded" />
              <div className="h-4 w-4 bg-black/10 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
