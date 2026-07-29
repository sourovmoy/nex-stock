"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-gray-100 rounded-2xl overflow-hidden cursor-pointer hover:border-gray-200 transition-colors shadow-sm"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center px-5 py-4 text-sm font-medium text-gray-800">
        {q}
        <ChevronDown
          size={18}
          className={`text-gray-400 shrink-0 ml-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}
