import { COLOR_MAP } from "@/lib/data";

export default function TestimonialsSection({ testimonials }) {
  return (
    <section className="px-6 mb-20">
      <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-2">
        Real results
      </p>
      <h2 className="text-3xl font-semibold mb-10">
        From businesses like yours
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map(({ quote, name, role, initials, color }) => {
          const c = COLOR_MAP[color];
          return (
            <div
              key={name}
              className="flex flex-col justify-between p-6 rounded-2xl border border-gray-100 bg-white"
            >
              {/* Quote mark */}
              <div>
                <div
                  className={`text-3xl font-serif leading-none mb-3 ${c.text}`}
                >
                  &ldquo;
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${c.icon} ${c.text}`}
                >
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{name}</p>
                  <p className="text-xs text-gray-400">{role}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
