export default function FeatureCards({ features }) {
  return (
    <section className="px-6 mb-20">
      <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
        Core features
      </p>
      <h2 className="text-3xl font-semibold mb-2">
        Control every part of your business
      </h2>
      <p className="text-gray-500 mb-10">
        Works for a single shop or a multi-branch chain.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition-shadow bg-white"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
              <Icon size={20} className="text-blue-600" />
            </div>
            <h3 className="font-medium text-gray-900 mb-1.5">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
