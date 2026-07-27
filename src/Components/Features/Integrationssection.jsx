// Server Component — static integration chip list.
// hover: classes work without JS (CSS-only).

export default function IntegrationsSection({ integrations }) {
  return (
    <section className="px-6 pb-24">
      <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
        Integrations
      </p>
      <h2 className="text-2xl font-semibold mb-2">
        Works with your existing tools
      </h2>
      <p className="text-gray-500 mb-8">
        Connect to the devices and services you already use.
      </p>

      <div className="flex flex-wrap gap-3">
        {integrations.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-100 rounded-full text-sm text-gray-700 hover:border-blue-200 hover:text-blue-600 transition-colors"
          >
            <Icon size={15} className="text-blue-500" />
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}
