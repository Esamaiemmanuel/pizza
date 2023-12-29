import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[10px]" };
const variants = {
  fill: {
    teal_900: "bg-teal-900 text-white-A700",
    teal_900_5e: "bg-teal-900_5e",
    teal_900_0c: "bg-teal-900_0c",
    light_blue_600: "bg-light_blue-600 text-white-A700",
  },
};
const sizes = { xs: "p-[9px]", sm: "p-[13px]", md: "p-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "teal_900",
    "teal_900_5e",
    "teal_900_0c",
    "light_blue_600",
  ]),
};

export { Button };
