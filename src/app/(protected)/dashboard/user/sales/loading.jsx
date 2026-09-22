const Loading = () => (
  <div className="p-3 space-y-4 animate-pulse">
    <div className="h-6 w-36 bg-black/10 rounded" />

    <div className="bg-white border border-black/10 rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-black/5">
          <tr>
            {Array.from({ length: 6 }).map((_, i) => (
              <th key={i} className="px-4 py-3">
                <div className="h-3 w-14 bg-black/10 rounded" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }).map((_, row) => (
            <tr key={row} className="border-t border-black/5">
              {Array.from({ length: 6 }).map((__, col) => (
                <td key={col} className="px-4 py-3">
                  <div className="h-4 w-16 bg-black/10 rounded" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Loading;
