"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { FiPlus, FiLoader } from "react-icons/fi";
import { addCategory } from "@/lib/products";
import Swal from "sweetalert2";

const AddCategoryForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    startTransition(async () => {
      try {
        const res = await addCategory(name);
        if (res.success) {
          setName("");
          Swal.fire({ title: res.message, icon: "success", draggable: true });
          // Data lives in the server component now — ask Next.js to refetch.
          router.refresh();
        } else {
          Swal.fire({ title: res.message, icon: "warning", draggable: true });
        }
      } catch (error) {
        Swal.fire({
          title: "Category যোগ করতে সমস্যা হয়েছে",
          text: error?.message,
          icon: "error",
        });
      }
    });
  };

  return (
    <form onSubmit={handleAdd} className="flex gap-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="নতুন category নাম"
        disabled={isPending}
        className="flex-1 px-3 py-2 border border-black/10 rounded-lg text-sm disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={isPending}
        className="flex items-center gap-1 bg-blue-400 text-white text-sm px-4 py-2 rounded-lg disabled:opacity-60"
      >
        {isPending ? <FiLoader className="animate-spin" /> : <FiPlus />} Add
      </button>
    </form>
  );
};

export default AddCategoryForm;
