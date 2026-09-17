const CategoryPageSkeleton = () => {
  const skeletonRows = Array.from({ length: 20 });

  return (
    <div className="p-3 space-y-4 animate-pulse">
      {/* Heading */}
      <div className="h-6 w-32 bg-black/10 rounded" />

      {/* Add-category form area */}
      <div className="flex gap-2">
        <div className="flex-1 h-10 bg-black/10 rounded-lg" />
        <div className="h-10 w-24 bg-black/10 rounded-lg" />
      </div>

      {/* Category list */}
      <div className="bg-white border border-black/10 rounded-xl divide-y divide-black/5">
        {skeletonRows.map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-3"
          >
            <div className="flex gap-10">
              <div className="h-4 w-4 bg-black/10 rounded" />
              <div className="h-4 w-28 bg-black/10 rounded" />
            </div>
            <div className="h-4 w-4 bg-black/10 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPageSkeleton;
