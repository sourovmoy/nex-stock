import { notFound } from "next/navigation";
import { getProductById } from "@/lib/products";
import EditProductForm from "@/Components/Products/EditProduct/EditProductForm";

const ParticularProduct = async ({ params }) => {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  const res = await getProductById(id);

  if (!res.success || !res.product) {
    notFound();
  }

  return <EditProductForm product={res.product} />;
};

export default ParticularProduct;
