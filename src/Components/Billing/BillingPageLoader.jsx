"use client";

import dynamic from "next/dynamic";
import BillingPageLoading from "./BillingPageLoading";

const BillingPage = dynamic(() => import("./BillingPage"), {
  ssr: false,
  loading: () => <BillingPageLoading />,
});

const BillingPageLoader = ({ initialProducts }) => {
  return <BillingPage initialProducts={initialProducts} />;
};

export default BillingPageLoader;
