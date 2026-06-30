"use client";
import HeaderSkeleton from "@/Components/Skeleton/HeaderSkeleton";
import UserModal from "@/Components/UserModal/UserModal";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

const HeadersBtn = () => {
  const data = useSession();

  return (
    <>
      {data.status === "loading" ? (
        <div>
          <HeaderSkeleton />
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
        <Link className="btn" href={"login"}>
          Login
        </Link>
      )}
    </>
  );
};

export default HeadersBtn;
