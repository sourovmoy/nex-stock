// Server Component — static 6-benefit grid
export default function BenefitsSection({ benefits }) {
  return (
    <section className="px-6 mb-20">
      <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-2">
        Why it works
      </p>
      <h2 className="text-3xl font-semibold mb-2">
        Built around real business needs
      </h2>
      <p className="text-gray-500 mb-10">
        Not just features — outcomes that show up in your numbers.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-sm transition-shadow"
          >
            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
              <Icon size={20} className="text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1.5 text-sm">
              {title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
