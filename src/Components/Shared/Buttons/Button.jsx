import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  // 1. Base styles that every button will have
  const baseStyles =
    "px-4 py-2 font-bold rounded-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2";

  // 2. Variants for common POS actions (Vendor, Admin, Staff styles)
  const variants = {
    primary: "shadow-lg shadow-indigo-200",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    ghost: "text-gray-600 hover:bg-gray-100",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-100",
  };

  // 3. Combine base + variant + custom incoming className
  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
