"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const HeadersBtn = () => {
  const data = useSession();
  console.log(data);

  return (
    <>
      {data.status === "authenticated" ? (
        <div className="flex gap-2">
          <button className="btn bg-indigo-700 text-white">New Orders</button>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="btn"
          >
            Logout
          </button>
        </div>
      ) : (
        "no user"
      )}
    </>
  );
};

export default HeadersBtn;
