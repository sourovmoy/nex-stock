"use client";
import React, { useState } from "react";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import MenuModal from "./MenuModal";

const LinksModal = () => {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  return (
    <div className="relative flex items-center gap-10">
      <div className="flex items-center gap-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuModalOpen(true);
          }}
          className="inline md:hidden"
        >
          <RiMenuUnfold3Fill size={20} />
        </button>
        <MenuModal
          isMenuModalOpen={isMenuModalOpen}
          setIsMenuModalOpen={setIsMenuModalOpen}
        />
      </div>
    </div>
  );
};

export default LinksModal;
