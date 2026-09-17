import React from "react";

const loading = () => {
  const skeletonRows = Array.from({ length: 20 });

  return (
    <div className="space-y-4 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="h-6 w-32 bg-black/10 rounded" />
        <div className="h-9 w-32 bg-black/10 rounded-lg" />
      </div>

      <div className="bg-white border border-black/10 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-black/5">
            <tr>
              {Array.from({ length: 6 }).map((_, i) => (
                <th key={i} className="px-2 py-3">
                  <div className="h-3 w-12 bg-black/10 rounded" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {skeletonRows.map((_, rowIndex) => (
              <tr key={rowIndex} className="border-t border-black/5">
                {Array.from({ length: 6 }).map((__, colIndex) => (
                  <td key={colIndex} className="px-2 py-3">
                    <div className="h-3 w-16 bg-black/10 rounded" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default loading;
