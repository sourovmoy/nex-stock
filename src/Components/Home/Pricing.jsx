import React from "react";
import { HiCheck, HiX } from "react-icons/hi";
import {
  SiShieldsdotio,
  SiPciids,
  SiSpringsecurity,
  SiVisa,
  SiLetsencrypt,
  SiMastercard,
} from "react-icons/si";
const Pricing = () => {
  const plans = [
    {
      name: "Startup",
      price: "$49",
      desc: "Perfect for small shops.",
      features: [
        { text: "1 Register Location", included: true },
        { text: "1,000 SKUs", included: true },
        { text: "Advanced Analytics", included: false },
      ],
      button: "Choose Starter",
    },
    {
      name: "Professional",
      price: "$129",
      desc: "Our most popular choice.",
      popular: true,
      features: [
        { text: "5 Register Locations", included: true },
        { text: "Unlimited SKUs", included: true },
        { text: "Real-time AI Analytics", included: true },
        { text: "Multi-user Permissions", included: true },
      ],
      button: "Start 14-Day Trial",
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Tailored for global franchises.",
      features: [
        { text: "Dedicated Account Manager", included: true },
        { text: "API Access & Webhooks", included: true },
        { text: "24/7 Priority Support", included: true },
      ],
      button: "Contact Sales",
    },
  ];

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">
          Transparent Pricing.
        </h2>
        <p className="text-gray-500 mt-2">
          No hidden fees. Scale your plan as your business grows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative p-8 rounded-3xl border transition-all duration-300 hover:translate-y-1
              ${plan.popular ? "border-indigo-600 ring-4 ring-indigo-50 shadow-2xl scale-105 z-10" : "border-gray-200 hover:border-gray-300"}`}
          >
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-bold py-1 px-3 rounded-full uppercase tracking-widest">
                Most Popular
              </span>
            )}
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              {plan.name}
            </h3>
            <div className="flex items-baseline gap-1 mt-4 mb-6">
              <span className="text-4xl font-extrabold text-gray-900">
                {plan.price}
              </span>
              {plan.price !== "Custom" && (
                <span className="text-gray-500">/mo</span>
              )}
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-sm text-gray-600"
                >
                  {feat.included ? (
                    <HiCheck className="text-indigo-600" />
                  ) : (
                    <HiX className="text-gray-300" />
                  )}
                  {feat.text}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-xl font-bold transition-all 
              ${plan.popular ? "bg-indigo-600 text-white shadow-lg" : "border-2 border-gray-200 text-gray-600 hover:border-indigo-600 hover:text-indigo-600"}`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      {/* Compliance Icons from Screenshot 225854 */}
      {/* Compliance Icons Section */}
      <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
        <div className="flex items-center gap-2 font-semibold text-xs">
          <SiShieldsdotio size={20} /> ISO 27001
        </div>
        <div className="flex items-center gap-2 font-semibold text-xs">
          <SiVisa size={30} /> PCI DSS Level 1
        </div>
        <div className="flex items-center gap-2 font-semibold text-xs">
          <SiLetsencrypt size={20} /> SOC 2 Type II
        </div>
        <div className="flex items-center gap-2 font-semibold text-xs">
          <SiMastercard size={20} /> HIPAA Compliant
        </div>
      </div>
    </section>
  );
};

export default Pricing;
