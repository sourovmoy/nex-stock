const BillingPageLoading = () => (
  <div className="p-3 grid grid-cols-1 lg:grid-cols-3 gap-6 animate-pulse">
    <div className="lg:col-span-2 space-y-4">
      <div className="h-10 bg-black/10 rounded-lg" />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="h-16 bg-black/10 rounded-lg" />
        ))}
      </div>
    </div>
    <div className="bg-white border border-black/10 rounded-xl p-4 h-64" />
  </div>
);

export default BillingPageLoading;
