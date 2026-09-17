import Link from "next/link";
import DeleteCategoryButton from "./DeleteCategoryButton";

// Still a SERVER component. Link is fine here — navigation doesn't need
// the client. Only the delete button (Swal + click) needs "use client".
const CategoryRow = ({ category, index }) => {
  return (
    <Link
      href={`/dashboard/user/products/categories/${category.name}`}
      className="flex items-center justify-between px-4 py-3 hover:bg-black/[0.02]"
    >
      <div className="flex gap-10">
        <span className="text-sm text-black/80">{index + 1}</span>
        <span className="text-sm text-black/80">{category.name}</span>
      </div>
      <DeleteCategoryButton categoryName={category.name} />
    </Link>
  );
};

export default CategoryRow;
