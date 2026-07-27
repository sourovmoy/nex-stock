import { CheckCircle2 } from "lucide-react";

export default function ReportsHighlight({ reportBars, reportChecks }) {
  return (
    <section className="px-6 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Mock report bars — visual only */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 space-y-3 order-2 md:order-1">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
            Top products this week
          </p>
          {reportBars.map((bar) => (
            <div key={bar.label} className="flex items-center gap-3">
              <span className="text-xs text-gray-400 w-12 text-right shrink-0">
                {bar.label}
              </span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: bar.width }}
                />
              </div>
              <span className="text-xs font-medium text-gray-700 w-14 shrink-0">
                {bar.value}
              </span>
            </div>
          ))}
        </div>

        {/* Text */}
        <div className="order-1 md:order-2">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
            Reports & analytics
          </p>
          <h2 className="text-2xl font-semibold mb-3">
            Make decisions backed by data
          </h2>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Know which products are most profitable and when sales peak — so
            every decision counts.
          </p>
          <ul className="space-y-3">
            {reportChecks.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-gray-700"
              >
                <CheckCircle2
                  size={16}
                  className="text-green-500 mt-0.5 shrink-0"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
