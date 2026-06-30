import React from "react";

const HeaderSkeleton = () => {
  return (
    <div className="flex gap-2 items-center">
      {/* New Orders button skeleton */}
      <div className="hidden sm:block h-9 w-24 rounded-md bg-gray-200 animate-pulse" />

      {/* Logout button skeleton */}
      <div className="hidden sm:block h-9 w-20 rounded-md bg-gray-200 animate-pulse" />

      {/* User avatar skeleton */}
      <div className="h-9 w-9 rounded-full bg-gray-200 animate-pulse" />
    </div>
  );
};

export default HeaderSkeleton;
