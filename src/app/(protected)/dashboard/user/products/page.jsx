import Link from "next/link";
import { FiPlusCircle } from "react-icons/fi";
import { getProducts } from "@/lib/products";
import ProductRow from "@/Components/AllProductsPage/Productrow";

const ProductsListPage = async () => {
  const res = await getProducts();
  const products = res.success ? res.products : [];
  const errorMsg = res.success
    ? ""
    : res.message || "Products লোড করতে সমস্যা হয়েছে";

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-black/80">All Products</h1>
        <Link
          href="/dashboard/user/products/add"
          className="flex items-center gap-2 bg-blue-400 text-white text-sm px-4 py-2 rounded-lg"
        >
          <FiPlusCircle /> Add Product
        </Link>
      </div>

      {errorMsg && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {errorMsg}
        </p>
      )}

      <div className="bg-white border border-black/10 rounded-xl overflow-x-scroll">
        <table className="w-full text-sm">
          <thead className="bg-black/5 text-black/60 text-left">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 && !errorMsg && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-black/40">
                  কোনো product যোগ করা হয়নি
                </td>
              </tr>
            )}

            {products.map((product) => (
              <ProductRow key={product._id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsListPage;
