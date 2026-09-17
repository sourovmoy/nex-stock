import { getCategory } from "@/lib/products";

import CategoryRow from "@/Components/Category/CategoryRow";
import AddCategoryForm from "@/Components/Category/AddCategoryFrom";

const CategoriesPage = async () => {
  const categories = (await getCategory()) || [];

  return (
    <div className="p-3 space-y-4">
      <h1 className="text-xl font-semibold text-black/80">Categories</h1>

      <AddCategoryForm />

      <div className="bg-white border border-black/10 rounded-xl divide-y divide-black/5">
        {categories.map((c, index) => (
          <CategoryRow key={c._id || c.name} category={c} index={index} />
        ))}

        {categories.length === 0 && (
          <p className="px-4 py-6 text-center text-sm text-black/40">
            কোনো category নেই
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
