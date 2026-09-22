const Loading = () => (
  <div className="p-3 animate-pulse">
    <div className="bg-white border border-black/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="h-5 w-32 bg-black/10 rounded" />
        <div className="h-4 w-14 bg-black/10 rounded" />
      </div>

      <div className="h-3 w-48 bg-black/10 rounded mb-4" />

      <div className="space-y-2 mb-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex justify-between">
            <div className="h-4 w-32 bg-black/10 rounded" />
            <div className="h-4 w-10 bg-black/10 rounded" />
            <div className="h-4 w-14 bg-black/10 rounded" />
          </div>
        ))}
      </div>

      <div className="space-y-1.5 flex flex-col items-end">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-3.5 w-28 bg-black/10 rounded" />
        ))}
      </div>
    </div>
  </div>
);

export default Loading;
