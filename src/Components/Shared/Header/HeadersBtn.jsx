"use client";
import HeaderSkeleton from "@/Components/Skeleton/HeaderSkeleton";
import UserModal from "@/Components/UserModal/UserModal";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const HeadersBtn = () => {
  const data = useSession();
  return (
    <>
      {data.status === "loading" ? (
        <div>
          {data.data === undefined ? (
            <p className="hidden sm:block h-8 w-14 rounded-md bg-gray-200 animate-pulse"></p>
          ) : (
            <HeaderSkeleton />
          )}
        </div>
      ) : data.status === "authenticated" ? (
        <div className="flex gap-2">
          <button className="hidden sm:block btn bg-indigo-700 text-white">
            New Orders
          </button>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="hidden sm:block btn"
          >
            Logout
          </button>
          <UserModal />
        </div>
      ) : (
        <Link className="btn" href={"/login"}>
          Login
        </Link>
      )}
    </>
  );
};

export default HeadersBtn;
