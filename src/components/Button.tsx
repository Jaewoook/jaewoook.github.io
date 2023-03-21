/**
 * External modules
 */
import React from "react";

const defaultClass =
  "px-3 py-1.5 border border-black rounded bg-white hover:bg-black text-black hover:text-white transition-colors";

export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className = "", ...rest } = props;
  return <button className={`${className} ${defaultClass}`} {...rest} />;
};
