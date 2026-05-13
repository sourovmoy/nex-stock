import React from "react";
import {
  MdOutlineStorefront,
  MdOutlineLocalPharmacy,
  MdOutlineRestaurantMenu,
} from "react-icons/md";
import { HiOutlineCheckCircle } from "react-icons/hi";

const IndustrySection = () => {
  const industries = [
    {
      title: "Modern Retail",
      desc: "Multi-location stock syncing, barcode generation, and customer loyalty programs integrated at the core.",
      icon: <MdOutlineStorefront className="text-indigo-600" size={24} />,
      features: ["SKU Management", "Supplier Portal", "Omni-channel Sync"],
    },
    {
      title: "Healthcare & Pharmacy",
      desc: "Regulatory compliance tools, expiry alerts, and prescriptive tracking for secure medical operations.",
      icon: <MdOutlineLocalPharmacy className="text-emerald-600" size={24} />,
      features: ["Batch Tracking", "Compliance Logs", "Secure Rx Storage"],
    },
    {
      title: "Fine Dining & Bistro",
      desc: "Table mapping, split-billing, and KDS integration designed for high-pressure kitchen environments.",
      icon: <MdOutlineRestaurantMenu className="text-orange-600" size={24} />,
      features: [
        "Ingredient Level Tracking",
        "Floor Plan Editor",
        "Offline Orders",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Engineered for your industry.
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Specific modules designed to handle the unique complexities of your
          business model, out of the box.
        </p>
      </div>

      {/* Industry Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {industries.map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl border border-gray-200 transition-all duration-300 hover:border-indigo-600/50 hover:bg-indigo-50 hover:shadow-xl hover:shadow-gray-200/40 hover:translate-y-1 flex flex-col h-full"
          >
            {/* Icon Wrapper - No BG color, just the icon color */}
            <div className="mb-6">{item.icon}</div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
              {item.desc}
            </p>

            {/* Features List */}
            <ul className="space-y-3 pt-6 border-t border-gray-100">
              {item.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-xs font-semibold text-gray-700 uppercase tracking-wide"
                >
                  <HiOutlineCheckCircle
                    color="green"
                    className="text-gray-400"
                    size={16}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustrySection;
