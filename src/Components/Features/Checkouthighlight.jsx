import { CheckCircle2 } from "lucide-react";

export default function CheckoutHighlight({
  mockItems,
  checkoutMethods,
  saleChecks,
}) {
  return (
    <section className="px-6 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
            Checkout flow
          </p>
          <h2 className="text-2xl font-semibold mb-3">
            Complete a sale in 3 steps
          </h2>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Scan a barcode, take payment, hand over the receipt. Long queues are
            a thing of the past.
          </p>
          <ul className="space-y-3">
            {saleChecks.map((item) => (
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

        {/* Mock checkout UI — visual only */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 space-y-2.5">
          {mockItems.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-center bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm"
            >
              <span className="font-medium text-gray-800">{item.name}</span>
              <span className="text-blue-600 font-medium">{item.price}</span>
            </div>
          ))}

          <div className="flex justify-between items-center bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-sm font-semibold text-blue-700">
            <span>Total</span>
            <span>$9.85</span>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-1">
            {checkoutMethods.map((method, i) => (
              <div
                key={method}
                className={`text-center text-xs py-2 rounded-lg border font-medium ${
                  i === 0
                    ? "bg-blue-50 border-blue-200 text-blue-700"
                    : "bg-white border-gray-100 text-gray-500"
                }`}
              >
                {method}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
