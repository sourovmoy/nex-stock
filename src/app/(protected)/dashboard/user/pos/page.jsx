import BillingPage from "@/Components/Billing/BillingPage";
import { getProducts } from "@/lib/products";

const Billing = async () => {
  const res = await getProducts();
  const products = res.success ? res.products : [];

  return <BillingPage initialProducts={products} />;
};

export default Billing;
