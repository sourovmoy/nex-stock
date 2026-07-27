// Server Component — static problem → solution comparison list
import { XCircle, CheckCircle2 } from "lucide-react";

export default function ProblemSolutionSection({ problems }) {
  return (
    <section className="px-6 mb-20">
      <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-2">
        Before & after
      </p>
      <h2 className="text-3xl font-semibold mb-2">Sound familiar?</h2>
      <p className="text-gray-500 mb-10">
        These are the problems we hear from business owners every day — and what
        happens after they switch.
      </p>

      {/* Column headers */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-xl">
          <XCircle size={15} className="text-red-400 shrink-0" />
          <span className="text-xs font-semibold text-red-500 uppercase tracking-wide">
            Without POS
          </span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-100 rounded-xl">
          <CheckCircle2 size={15} className="text-green-500 shrink-0" />
          <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
            With our POS
          </span>
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-3">
        {problems.map(({ problem, solution }) => (
          <div key={problem} className="grid grid-cols-2 gap-4">
            {/* Problem */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-100 rounded-xl">
              <XCircle size={16} className="text-red-300 mt-0.5 shrink-0" />
              <p className="text-sm text-gray-500 leading-snug">{problem}</p>
            </div>
            {/* Solution */}
            <div className="flex items-start gap-3 p-4 bg-white border border-green-100 rounded-xl">
              <CheckCircle2
                size={16}
                className="text-green-500 mt-0.5 shrink-0"
              />
              <p className="text-sm text-gray-700 leading-snug font-medium">
                {solution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
