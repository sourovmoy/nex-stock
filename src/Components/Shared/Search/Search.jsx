"use client";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handelSubmit = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(!isOpen)} className="mt-2">
        <IoSearchSharp size={25} />
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="z-50 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div
          className={`absolute inset-0 z-50 w-screen overflow-y-auto sm:pr-85`}
        >
          <div className="flex min-w-full justify-center md:justify-end">
            <DialogPanel
              transition
              className="w-full sm:w-2/3 md:w-full max-w-sm rounded-sm bg-gray-200 duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 h-10 mt-20 sm:mt-7"
            >
              <div className="flex justify-between items-center">
                <div className="flex-1 flex items-center gap-2 px-5 pt-2">
                  <FaSearch color="gray" size={15} />
                  <input
                    autoFocus
                    type="text"
                    placeholder=" Search products, orders, or suppliers..."
                    className="w-full text-gray-800 bg-transparent outline-none placeholder:text-gray-400"
                    id=""
                    value={query}
                    onChange={handelSubmit}
                  />
                </div>
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
