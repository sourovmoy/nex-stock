import React from "react";

const CategoryPageSkeleton = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 animate-pulse">
      <div className="flex gap-10 items-center">
        <div className="h-4 w-4 bg-black/10 rounded" />
        <div className="h-4 w-32 bg-black/10 rounded" />
      </div>
      <div className="h-4 w-4 bg-black/10 rounded" />
    </div>
  );
};

export default CategoryPageSkeleton;
