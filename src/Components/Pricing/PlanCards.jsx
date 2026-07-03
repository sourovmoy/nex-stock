"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export default function PlanCards({ plans }) {
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    const handler = (e) => setIsYearly(e.detail.isYearly);
    window.addEventListener("billing-change", handler);
    return () => window.removeEventListener("billing-change", handler);
  }, []);

  const getPrice = (plan) => {
    if (plan.monthlyPrice === null) return null;
    return isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  };

  return (
    <section className="px-6 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {plans.map((plan) => {
          const price = getPrice(plan);
          return (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.featured
                  ? "border-2 border-blue-500 bg-white shadow-sm"
                  : "border border-gray-100 bg-white"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  Most popular
                </span>
              )}

              <div className="mb-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                  {plan.name}
                </p>
                {price !== null ? (
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-sm text-gray-400 mb-1">$</span>
                    <span className="text-4xl font-semibold text-gray-900">
                      {price}
                    </span>
                    <span className="text-sm text-gray-400 mb-1">/mo</span>
                  </div>
                ) : (
                  <div className="text-3xl font-semibold text-gray-900 mb-1">
                    Custom
                  </div>
                )}
                <p className="text-sm text-gray-500 leading-snug">
                  {plan.description}
                </p>
              </div>

              <button
                className={`w-full py-2.5 rounded-xl text-sm font-medium mb-5 transition-colors ${
                  plan.featured
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-2.5 flex-1">
                {plan.features.map(({ label, included }) => (
                  <li key={label} className="flex items-start gap-2 text-sm">
                    {included ? (
                      <CheckCircle2
                        size={15}
                        className="text-green-500 mt-0.5 shrink-0"
                      />
                    ) : (
                      <XCircle
                        size={15}
                        className="text-gray-300 mt-0.5 shrink-0"
                      />
                    )}
                    <span
                      className={included ? "text-gray-700" : "text-gray-400"}
                    >
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
