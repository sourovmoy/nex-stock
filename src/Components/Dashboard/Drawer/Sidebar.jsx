"use client";
import React, { useState } from "react";
import Logo from "@/Components/Shared/Logo/Logo";
import {
  FiAlertTriangle,
  FiBarChart2,
  FiBox,
  FiChevronDown,
  FiClock,
  FiCreditCard,
  FiFileText,
  FiGrid,
  FiHome,
  FiLayers,
  FiLogOut,
  FiMapPin,
  FiPackage,
  FiPercent,
  FiPieChart,
  FiPlusCircle,
  FiPrinter,
  FiRepeat,
  FiRotateCcw,
  FiSettings,
  FiShoppingBag,
  FiShoppingCart,
  FiTag,
  FiTrendingUp,
  FiTruck,
  FiUser,
  FiUsers,
  FiX,
} from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Sidebar = ({ onClose, open }) => {
  const { data } = useSession();
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (label) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const isChildActive = (children, normalizedPathname, normalizePath) =>
    children?.some((child) => normalizedPathname === normalizePath(child.to));

  const pathname = usePathname();
  const normalizePath = (path) => {
    if (!path) return "/home";
    return path.length > 1 && path.endsWith("/") ? path.slice(0, 1) : path;
  };
  const normalizedPathname = normalizePath(pathname || "/home");
  const NAV_ITEMS = [
    { to: "/dashboard", icon: <FiHome />, label: "Overview" },
    {
      label: "POS",
      icon: <FiShoppingCart />,
      children: [
        { to: "/dashboard/pos", icon: <FiShoppingCart />, label: "Billing" },
        {
          to: "/dashboard/pos/orders",
          icon: <FiClock />,
          label: "Held Orders",
        },
        {
          to: "/dashboard/pos/receipts",
          icon: <FiPrinter />,
          label: "Receipts",
        },
      ],
    },
    {
      label: "Products",
      icon: <FiBox />,
      children: [
        { to: "/dashboard/products", icon: <FiBox />, label: "All Products" },
        {
          to: "/dashboard/products/add",
          icon: <FiPlusCircle />,
          label: "Add Product",
        },
        {
          to: "/dashboard/products/categories",
          icon: <FiGrid />,
          label: "Categories",
        },
        {
          to: "/dashboard/products/brands",
          icon: <FiTag />,
          label: "Brands",
        },
        { to: "/dashboard/products/units", icon: <FiLayers />, label: "Units" },
      ],
    },
    {
      label: "Stock",
      icon: <FiPackage />,
      children: [
        {
          to: "/dashboard/stock",
          icon: <FiPackage />,
          label: "Stock Overview",
        },
        {
          to: "/dashboard/stock/adjustment",
          icon: <FiSettings />,
          label: "Adjustment",
        },
        {
          to: "/dashboard/stock/transfer",
          icon: <FiRepeat />,
          label: "Transfer",
        },
        {
          to: "/dashboard/stock/low-stock",
          icon: <FiAlertTriangle />,
          label: "Low Stock",
        },
        {
          to: "/dashboard/stock/history",
          icon: <FiClock />,
          label: "History",
        },
      ],
    },
    {
      label: "Purchases",
      icon: <FiTruck />,
      children: [
        {
          to: "/dashboard/purchases",
          icon: <FiTruck />,
          label: "All Purchases",
        },
        {
          to: "/dashboard/purchases/add",
          icon: <FiPlusCircle />,
          label: "New Purchase",
        },
        {
          to: "/dashboard/purchases/returns",
          icon: <FiRotateCcw />,
          label: "Returns",
        },
      ],
    },
    {
      label: "Sales",
      icon: <FiShoppingBag />,
      children: [
        {
          to: "/dashboard/sales",
          icon: <FiShoppingBag />,
          label: "Sales History",
        },
        {
          to: "/dashboard/sales/returns",
          icon: <FiRotateCcw />,
          label: "Customer Returns",
        },
        {
          to: "/dashboard/sales/invoices",
          icon: <FiFileText />,
          label: "Invoices",
        },
      ],
    },
    { to: "/dashboard/suppliers", icon: <FiTruck />, label: "Suppliers" },
    { to: "/dashboard/customers", icon: <FiUsers />, label: "Customers" },
    { to: "/dashboard/branches", icon: <FiMapPin />, label: "Branches" },
    { to: "/dashboard/employees", icon: <FiUser />, label: "Employees" },
    { to: "/dashboard/expenses", icon: <FiCreditCard />, label: "Expenses" },
    {
      label: "Reports",
      icon: <FiPieChart />,
      children: [
        {
          to: "/dashboard/reports/sales",
          icon: <FiTrendingUp />,
          label: "Sales Report",
        },
        {
          to: "/dashboard/reports/stock",
          icon: <FiPieChart />,
          label: "Stock Report",
        },
        {
          to: "/dashboard/reports/profit-loss",
          icon: <FiBarChart2 />,
          label: "Profit & Loss",
        },
      ],
    },
    { to: "/dashboard/settings", icon: <FiSettings />, label: "Settings" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 z-30 flex flex-col
          shadow-md text-white bg-white
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        {/* Logo + close */}
        <div className="py-1">
          <Logo />
        </div>
        <div className="flex items-center justify-between border-b border-black/10 ">
          <button
            onClick={onClose}
            className="lg:hidden text-black/70 hover:text-black transition-colors"
            aria-label="Close menu"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* User info */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-black/10">
          <Image
            src={
              data?.user?.image ||
              "https://ui-avatars.com/api/?name=" +
                encodeURIComponent(data?.user?.name || "U")
            }
            height={20}
            width={20}
            loading="eager"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-semibold truncate text-gray-600">
              {data?.user?.name || "User"}
            </p>
            <p className="text-xs text-black/60 truncate">
              {data?.user?.email}
            </p>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            if (item.children) {
              const childActive = isChildActive(
                item.children,
                normalizedPathname,
                normalizePath,
              );
              const isOpen = openMenus[item.label] || childActive;

              return (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => toggleMenu(item.label)}
                    className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      childActive
                        ? "bg-black/15 text-black"
                        : "text-black/70 hover:bg-black/10 hover:text-black"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base">{item.icon}</span>
                      {item.label}
                    </span>
                    <FiChevronDown
                      className={`text-xs transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="ml-6 mt-1 space-y-1 border-l border-black/10 pl-3">
                      {item.children.map((child) => {
                        const isActive =
                          normalizedPathname === normalizePath(child.to);
                        return (
                          <Link
                            key={child.to}
                            href={child.to}
                            onClick={onClose}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                              isActive
                                ? "bg-black/15 text-black"
                                : "text-black/60 hover:bg-black/10 hover:text-black"
                            }`}
                          >
                            <span className="text-sm">{child.icon}</span>
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = normalizedPathname === normalizePath(item.to);
            return (
              <Link
                key={item.to}
                href={item.to}
                onClick={onClose}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-black/15 text-black"
                    : "text-black/70 hover:bg-black/10 hover:text-black"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-3 pb-2 border-t border-black/10 pt-1">
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-black/70 hover:bg-black/10 hover:text-black transition-all duration-200"
          >
            <FiLogOut className="text-base" />
            Sign out
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
