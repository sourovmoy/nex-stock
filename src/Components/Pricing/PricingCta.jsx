// Server Component — static call-to-action block, no interactivity
export default function PricingCta() {
  return (
    <section className="px-6 pb-24">
      <div className="bg-blue-50 border border-blue-100 rounded-2xl px-8 py-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Start free today — 30 days, no card needed
        </h2>
        <p className="text-gray-500 mb-6">
          Thousands of businesses are already running on our platform.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors">
          Start your free trial
        </button>
      </div>
    </section>
  );
}
