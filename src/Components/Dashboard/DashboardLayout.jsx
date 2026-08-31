"use client";
import React, { useState } from "react";
import Sidebar from "./Drawer/Sidebar";
import { FiMenu, FiUser } from "react-icons/fi";
import { useSession } from "next-auth/react";
import Image from "next/image";

const DashboardLayout = ({ children }) => {
  const session = useSession();
  const role = session?.data?.user?.role;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      {role === "admin" ? (
        ""
      ) : (
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          session={session}
        />
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-4 sm:px-6 h-14 bg-white-100 border-b border-gray-100 shrink-0 shadow-sm">
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-500 hover:text-[#244B43] transition-colors"
            aria-label="Open menu"
          >
            <FiMenu size={22} />
          </button>

          {/* Page title — desktop */}
          <span className="hidden lg:block text-sm font-semibold text-gray-700">
            Dashboard
          </span>

          {/* Right side */}
          <div className="relative flex items-center gap-3 ml-auto">
            <div className="w-8 h-8 rounded-full bg-[#244B43]/10 flex items-center justify-center">
              {session.status === "loading" ? (
                <FiUser size={15} className="text-[#244B43]" />
              ) : session?.status === "authenticated" ? (
                <Image
                  height={24}
                  width={24}
                  src={session?.data?.user?.image}
                  alt={session?.data?.user.name}
                  className="rounded-full outline-3 outline-gray-500 h-6 w-6"
                />
              ) : (
                <FiUser size={15} className="text-[#244B43]" />
              )}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-3 sm:p-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
