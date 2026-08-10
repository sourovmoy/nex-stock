"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { LayoutDashboard, LogOut, X } from "lucide-react";
import Link from "next/link";
import Loading from "../Loading/Loading";

const UserModal = () => {
  const { data, status } = useSession();

  const userRole = data?.user?.role;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {data?.user?.image ? (
          <Image
            src={data?.user?.image}
            alt={data?.user?.name}
            height={33}
            width={33}
            className="rounded-full outline-2 w-10 h-10"
            referrerPolicy="no-referrer"
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
        <div className="fixed inset-0 z-0 w-screen overflow-y-auto md:pr-30">
          <div className="flex justify-end mt-0 sm:mt-20">
            <DialogPanel
              transition
              className="w-2/3 md:w-90 border-r border-gray-100 bg-white sm:bg-blue-100 shadow-2xl z-50 animate-in slide-in-from-right duration-300 rounded-md"
            >
              <div className=" flex flex-col justify-between  h-screen sm:h-50">
                <div className="flex items-center justify-between border-b border-gray-400">
                  {/* User info header */}
                  <div className="flex items-center px-5 py-4">
                    {data?.user?.image ? (
                      <Image
                        height={44}
                        width={44}
                        src={data.user.image}
                        alt={data?.user?.name || "User"}
                        className="h-11 w-11 rounded-full object-cover ring-1 ring-gray-200"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="h-11 w-11 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center justify-center shrink-0">
                        {data?.user?.name
                          ?.split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")
                          .toUpperCase() || "U"}
                      </div>
                    )}
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900 truncate">
                        {data?.user?.name}
                      </h4>
                      <p className="text-xs text-gray-500 truncate mt-0.5">
                        {data?.user?.email}
                      </p>
                    </div>
                  </div>

                  <div>
                    <button onClick={() => setIsOpen(false)}>
                      <X size={25} color="red" className="mt-4 mr-2" />
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex-1">
                  <div className="py-1.5">
                    <Link
                      href={
                        userRole === "admin"
                          ? "/dashboard/admin"
                          : "/dashboard/user"
                      }
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <LayoutDashboard size={17} className="text-gray-500" />
                      Dashboard
                    </Link>
                  </div>
                </div>

                {/* Logout */}
                <div className="flex justify-end py-1.5 border-t border-gray-400">
                  <button
                    onClick={() => signOut({ callbackUrl: "/login" })}
                    className="w-full flex items-center gap-3 px-5 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut size={17} />
                    Log out
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default UserModal;
