const BillingPageLoading = () => (
  <div className="p-3 grid grid-cols-1 lg:grid-cols-3 gap-6 animate-pulse">
    {/* Product select section */}
    <div className="lg:col-span-2 space-y-4">
      {/* Search input */}
      <div className="h-10 bg-black/10 rounded-lg" />

      {/* Product table */}
      <div className="border border-black/10 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-black/5">
            <tr>
              <th className="px-3 py-2">
                <div className="h-3 w-16 bg-black/10 rounded" />
              </th>
              <th className="px-3 py-2">
                <div className="h-3 w-12 bg-black/10 rounded" />
              </th>
              <th className="px-3 py-2">
                <div className="h-3 w-12 bg-black/10 rounded" />
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 12 }).map((_, i) => (
              <tr key={i} className="border-t border-black/5 scroll-auto">
                <td className="px-3 py-3">
                  <div className="h-4 w-32 bg-black/10 rounded" />
                </td>
                <td className="px-3 py-3">
                  <div className="h-4 w-14 bg-black/10 rounded" />
                </td>
                <td className="px-3 py-3">
                  <div className="h-4 w-8 bg-black/10 rounded" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Cart section */}
    <div className="bg-white border border-black/10 rounded-xl p-4 h-fit sticky top-4">
      <div className="h-4 w-24 bg-black/10 rounded mb-4" />

      <div className="space-y-3">
        {Array.from({ length: 1 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="space-y-1.5">
              <div className="h-3.5 w-20 bg-black/10 rounded" />
              <div className="h-3 w-14 bg-black/10 rounded" />
            </div>
            <div className="h-3.5 w-16 bg-black/10 rounded" />
          </div>
        ))}
      </div>

      <div className="border-t border-black/10 mt-3 pt-3 space-y-3">
        <div className="flex justify-between">
          <div className="h-4 w-10 bg-black/10 rounded" />
          <div className="h-4 w-16 bg-black/10 rounded" />
        </div>
        <div className="h-9 bg-black/10 rounded-lg" />
      </div>
    </div>
  </div>
);

export default BillingPageLoading;
