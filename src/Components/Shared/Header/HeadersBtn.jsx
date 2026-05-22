"use client";
import { signOut } from "next-auth/react";
import React from "react";

const HeadersBtn = () => {
  const handelClick = () => {};
  return (
    <div className="flex gap-2">
      <button className="btn bg-indigo-700 text-white">New Orders</button>
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="btn"
      >
        Logout
      </button>
    </div>
  );
};

export default HeadersBtn;
