"use client";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <div>
      <Button onClick={() => setIsOpen(!isOpen)} className="">
        <FaSearch size={20} />
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto md:pr-20">
          <div className="flex min-w-full justify-end">
            <DialogPanel
              transition
              className="w-full max-w-sm rounded-sm bg-gray-200 duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 h-10 mt-2"
            >
              <div className="flex justify-between items-center">
                <form className="flex-1 flex items-center gap-2 px-5 pt-2">
                  <FaSearch color="gray" size={15} />
                  <input
                    autoFocus
                    type="text"
                    placeholder=" Search products, orders, or suppliers..."
                    className="w-full text-gray-800 bg-transparent outline-none placeholder:text-gray-400"
                    name="search"
                    id=""
                  />
                </form>
                <Button className="mt-2 mr-3" onClick={() => setIsOpen(false)}>
                  <RxCross2 size={20} />
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Search;
