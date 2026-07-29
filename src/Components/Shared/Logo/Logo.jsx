import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ height = 30, width = 40 }) => {
  return (
    <Link href={"/home"} className="flex justify-center items-center gap-2">
      <Image
        src={"/next-stock-logo.png"}
        alt={"next-stock-logo"}
        width={width}
        height={height}
        loading="eager"
        className="w-auto h-auto"
      />
    </Link>
  );
};

export default Logo;
