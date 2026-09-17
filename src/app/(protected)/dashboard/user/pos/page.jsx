import BillingPageLoader from "@/Components/Billing/BillingPageLoader";
import { getProducts } from "@/lib/products";

const Page = async () => {
  const res = await getProducts();
  const products = res.success ? res.products : [];

  return <BillingPageLoader initialProducts={products} />;
};

export default Page;
