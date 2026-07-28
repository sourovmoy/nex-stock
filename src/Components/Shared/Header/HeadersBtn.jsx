"use client";
import HeaderSkeleton from "@/Components/Skeleton/HeaderSkeleton";
import UserModal from "@/Components/UserModal/UserModal";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const HeadersBtn = () => {
  const { data: session, status } = useSession();

  return (
    <>
      {status === "loading" ? (
        <HeaderSkeleton />
      ) : status === "authenticated" ? (
        <div className="flex gap-2">
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="hidden sm:block btn"
          >
            Logout
          </button>
          <UserModal />
        </div>
      ) : (
        <div className="flex gap-2 justify-center items-center">
          <Link className="btn" href={"/login"}>
            Login
          </Link>
          <div className="w-10 h-10 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center">
            U
          </div>
        </div>
      )}
    </>
  );
};

export default HeadersBtn;
