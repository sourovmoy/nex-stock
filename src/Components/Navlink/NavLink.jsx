"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = () => {
  const pathname = usePathname();
  const normalizePath = (path) => {
    if (!path) return "/";
    return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
  };
  const normalizedPathname = normalizePath(pathname || "/");

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/solutions", label: "Solutions" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <>
      {navLinks.map((link) => {
        const isActive = normalizedPathname === normalizePath(link.href);
        return (
          <Link
            href={link.href}
            key={link.href}
            className={`transition-colors ${
              isActive
                ? "text-primary font-semibold"
                : "text-gray-600 hover:text-primary"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};

export default NavLink;
