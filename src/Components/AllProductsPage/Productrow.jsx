import Link from "next/link";
import DeleteProductButton from "./Deleteproductbutton";
import { FiEdit2 } from "react-icons/fi";

const LOW_STOCK_THRESHOLD = 10;

const ProductRow = ({ product }) => {
  const isOutOfStock = product.stockQuantity <= 0;
  const isLowStock =
    !isOutOfStock && product.stockQuantity <= LOW_STOCK_THRESHOLD;

  return (
    <tr className="border-t border-black/5">
      <td className="px-2 py-3">{product.name}</td>
      <td className="px-2 py-3">{product.category}</td>
      <td className="py-3">৳ {product.sellPrice}</td>
      <td className="px-2 py-3">
        <span
          className={
            isLowStock || isOutOfStock ? "text-red-500 font-medium" : ""
          }
        >
          {product.stockQuantity}
        </span>
      </td>
      <td className="py-3">
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            isOutOfStock
              ? "bg-red-100 text-red-600"
              : isLowStock
                ? "bg-amber-100 text-amber-700"
                : "bg-green-100 text-green-700"
          }`}
        >
          {isOutOfStock
            ? "Out of Stock"
            : isLowStock
              ? "Low Stock"
              : "In Stock"}
        </span>
      </td>
      <td className="flex items-center px-4 py-3 text-right space-x-4">
        <Link
          href={`/dashboard/user/products/edit/${product._id}`}
          className="text-black/50 hover:text-black inline-block"
        >
          <FiEdit2 size={15} />
        </Link>
        <DeleteProductButton
          category={product.category}
          productId={product._id}
        />
      </td>
    </tr>
  );
};

export default ProductRow;
