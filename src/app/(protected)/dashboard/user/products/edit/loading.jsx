const Loading = () => (
  <div className="p-3 max-w-lg space-y-4 animate-pulse">
    <div className="h-6 w-36 bg-black/10 rounded" />

    <div className="space-y-4 bg-white border border-black/10 rounded-xl p-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-1.5">
          <div className="h-3 w-16 bg-black/10 rounded" />
          <div className="h-10 bg-black/10 rounded-lg" />
        </div>
      ))}

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <div className="h-3 w-16 bg-black/10 rounded" />
          <div className="h-10 bg-black/10 rounded-lg" />
        </div>
        <div className="space-y-1.5">
          <div className="h-3 w-16 bg-black/10 rounded" />
          <div className="h-10 bg-black/10 rounded-lg" />
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        <div className="flex-1 h-9 bg-black/10 rounded-lg" />
        <div className="flex-1 h-9 bg-black/10 rounded-lg" />
      </div>
    </div>
  </div>
);

export default Loading;
