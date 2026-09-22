"use client";

import { FiPrinter } from "react-icons/fi";

const PrintButton = () => (
  <button
    type="button"
    onClick={() => window.print()}
    className="flex items-center gap-2 text-sm text-black/60 hover:text-black print:hidden"
  >
    <FiPrinter /> Print
  </button>
);

export default PrintButton;
