export default function StatsBar({ stats }) {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-20">
      <div className="grid grid-cols-3 divide-x divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
        {stats.map((s) => (
          <div key={s.label} className="py-8 text-center bg-gray-50/60">
            <div className="text-3xl font-semibold text-blue-600">
              {s.value}
            </div>
            <div className="text-xs text-gray-500 mt-1.5">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
