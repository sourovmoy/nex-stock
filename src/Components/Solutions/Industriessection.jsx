import { COLOR_MAP } from "@/lib/data";

export default function IndustriesSection({ industries }) {
  return (
    <section className="px-6 mb-20">
      <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-2">
        Industries we serve
      </p>
      <h2 className="text-3xl font-semibold mb-2">Find your fit</h2>
      <p className="text-gray-500 mb-10">
        Purpose-built workflows for the businesses that need them most.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {industries.map(
          ({ icon: Icon, name, tagline, description, highlights, color }) => {
            const c = COLOR_MAP[color];
            return (
              <div
                key={name}
                className="border border-gray-100 rounded-2xl p-6 bg-white hover:shadow-sm transition-shadow group"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${c.icon}`}
                  >
                    <Icon size={22} className={c.text} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base">
                      {name}
                    </h3>
                    <p className={`text-xs font-medium mt-0.5 ${c.text}`}>
                      {tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {description}
                </p>

                {/* Highlight chips */}
                <div className="flex flex-wrap gap-2">
                  {highlights.map((h) => (
                    <span
                      key={h}
                      className={`text-xs font-medium px-2.5 py-1 rounded-lg ${c.bg} ${c.text}`}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
}
