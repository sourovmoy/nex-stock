import BillingPage from "@/Components/Billing/BillingPage";
import { getProducts } from "@/lib/products";

const Page = async () => {
  const res = await getProducts();
  const products = res.success ? res.products : [];

  return <BillingPage initialProducts={products} />;
};

export default Page;
