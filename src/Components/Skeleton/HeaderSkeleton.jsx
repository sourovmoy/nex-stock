import React from "react";

const HeaderSkeleton = () => {
  return (
    <div className="flex gap-2 items-center">
      {/* Logout button skeleton */}
      <div className="hidden sm:block h-9 w-18 rounded-md bg-gray-300 animate-pulse" />

      {/* User avatar skeleton */}
      <div className="h-10 w-10 rounded-full bg-gray-300 animate-pulse" />
    </div>
  );
};

export default HeaderSkeleton;
