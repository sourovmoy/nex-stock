export default function FeaturesHero() {
  return (
    <section className="pb-16 text-center">
      <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-4 py-1.5 rounded-full mb-5 tracking-wide">
        Everything in one place
      </span>
      <h1 className="text-5xl font-semibold leading-tight mb-4 tracking-tight">
        Run your business
        <br />
        <span className="text-blue-600">faster and smarter</span>
      </h1>
      <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed">
        Sales, inventory, reports, and staff — all managed from one powerful POS
        system.
      </p>
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <button className="bg-blue-600 text-white px-7 py-3 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors">
          Start for free
        </button>
        <button className="border border-gray-200 text-gray-700 px-7 py-3 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
          Watch demo
        </button>
      </div>
    </section>
  );
}
