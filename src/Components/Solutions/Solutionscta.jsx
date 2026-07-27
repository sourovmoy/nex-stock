export default function SolutionsCta() {
  return (
    <section className="px-6 pb-24">
      <div className="relative overflow-hidden bg-indigo-600 rounded-2xl px-8 py-14 text-center">
        {/* Decorative blobs */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500 rounded-full opacity-40 blur-2xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-400 rounded-full opacity-40 blur-2xl" />

        <div className="relative">
          <span className="inline-block bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
            Start in 60 minutes
          </span>
          <h2 className="text-3xl font-semibold text-white mb-3 leading-snug">
            Ready to see how it fits
            <br />
            your business?
          </h2>
          <p className="text-indigo-200 text-base mb-8 max-w-md mx-auto leading-relaxed">
            Get a personalised walkthrough from our team — no sales pressure,
            just an honest look at whether we&apos;re the right fit.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button className="bg-white text-indigo-600 font-semibold px-7 py-3 rounded-xl text-sm hover:bg-indigo-50 transition-colors">
              Start free trial
            </button>
            <button className="border border-white/30 text-white px-7 py-3 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors">
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
