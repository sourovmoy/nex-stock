"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";

const UserModal = () => {
  const { data } = useSession();
  console.log(data);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {data?.user?.image ? (
          <Image
            src={data?.user?.image}
            alt={data?.user?.name}
            height={35}
            width={35}
            className="rounded-full outline-4"
            placeholder="blur"
            blurDataURL="..."
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center">
            {data.user.name ? data.user.name.charAt(0).toUpperCase() : "U"}
          </div>
        )}
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-0 w-screen overflow-y-auto md:pr-16">
          <div className="flex justify-end mt-15">
            <DialogPanel
              transition
              className="w-2/3 md:w-1/3 h-50 max-w-sm rounded-sm bg-gray-200 duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              {
                <>
                  <h4>{data?.user?.name}</h4>
                  <h4>{data?.user?.email}</h4>
                </>
              }
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default UserModal;
