"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { FiTrash2, FiLoader } from "react-icons/fi";
import { deleteCategory } from "@/lib/products";
import Swal from "sweetalert2";

const DeleteCategoryButton = ({ categoryName }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDelete = async (e) => {
    e.preventDefault(); // stop the parent Link from navigating
    e.stopPropagation(); // stop the click from bubbling to the Link at all

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (!result.isConfirmed) return;

    startTransition(async () => {
      try {
        const res = await deleteCategory(categoryName);
        router.refresh();
        await Swal.fire({
          title: "Deleted!",
          text: `${categoryName} ${res?.message || ""}`,
          icon: "success",
        });
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error?.message || "Delete করতে সমস্যা হয়েছে",
          icon: "error",
        });
      }
    });
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isPending}
      aria-label={`Delete ${categoryName}`}
      className="text-red-500 hover:text-red-700 disabled:opacity-50"
    >
      {isPending ? (
        <FiLoader size={15} className="animate-spin" />
      ) : (
        <FiTrash2 size={15} />
      )}
    </button>
  );
};

export default DeleteCategoryButton;
