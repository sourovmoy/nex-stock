"use client";
import { useState } from "react";

export default function BillingToggle() {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    const next = !isYearly;
    setIsYearly(next);
    window.dispatchEvent(
      new CustomEvent("billing-change", { detail: { isYearly: next } }),
    );
  };

  return (
    <div className="flex items-center justify-center gap-3 mb-12">
      <span
        className={`text-sm ${!isYearly ? "font-medium text-gray-900" : "text-gray-400"}`}
      >
        Monthly
      </span>

      <button
        onClick={handleToggle}
        className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
          isYearly ? "bg-blue-600" : "bg-gray-200"
        }`}
        aria-label="Toggle billing period"
        aria-pressed={isYearly}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
            isYearly ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>

      <span
        className={`text-sm flex items-center gap-2 ${isYearly ? "font-medium text-gray-900" : "text-gray-400"}`}
      >
        Yearly
        <span className="bg-green-50 text-green-600 text-xs font-semibold px-2 py-0.5 rounded-full">
          Save 20%
        </span>
      </span>
    </div>
  );
}
