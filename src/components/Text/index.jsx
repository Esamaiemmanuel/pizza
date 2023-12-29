import React from "react";

const sizeClasses = {
  txtInterRegular20: "font-inter font-normal",
  txtInterRegular16WhiteA700: "font-inter font-normal",
  txtInterBold36: "font-bold font-inter",
  txtInterMedium24: "font-inter font-medium",
  txtInterRegular20WhiteA700: "font-inter font-normal",
  txtInterBold48: "font-bold font-inter",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterBold24Teal900: "font-bold font-inter",
  txtInterSemiBold32Teal90087: "font-inter font-semibold",
  txtInterBold24: "font-bold font-inter",
  txtInterBold24Black900: "font-bold font-inter",
  txtInterSemiBold70: "font-inter font-semibold",
  txtInterBold64WhiteA700: "font-bold font-inter",
  txtInterBold64: "font-bold font-inter",
  txtInterRegular24WhiteA700: "font-inter font-normal",
  txtInterExtraBold24: "font-extrabold font-inter",
  txtInterSemiBold32: "font-inter font-semibold",
  txtInterSemiBold20WhiteA700: "font-inter font-semibold",
  txtInterMedium20: "font-inter font-medium",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular24: "font-inter font-normal",
  txtInterSemiBold20Black900: "font-inter font-semibold",
  txtInterRegular16: "font-inter font-normal",
  txtInterMedium20Black900: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
