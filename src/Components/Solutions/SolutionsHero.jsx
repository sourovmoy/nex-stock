export default function SolutionsHero() {
  return (
    <section className="px-6 pb-16 text-center">
      <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-medium px-4 py-1.5 rounded-full mb-5 tracking-wide">
        Built for your industry
      </span>
      <h1 className="text-5xl font-semibold leading-tight mb-4 tracking-tight">
        One POS system,
        <br />
        <span className="text-indigo-600">every kind of business</span>
      </h1>
      <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
        Whether you run a corner shop, a restaurant chain, or a pharmacy — our
        POS adapts to how you work, not the other way around.
      </p>

      {/* Quick industry jump links */}
      <div className="flex flex-wrap justify-center gap-2">
        {[
          "Retail",
          "Restaurant",
          "Pharmacy",
          "Salon",
          "Apparel",
          "Gym",
          "Bookshop",
          "Wholesale",
        ].map((label) => (
          <span
            key={label}
            className="text-xs font-medium px-3 py-1.5 bg-white border border-gray-100 rounded-full text-gray-600 hover:border-indigo-200 hover:text-indigo-600 transition-colors cursor-pointer"
          >
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
