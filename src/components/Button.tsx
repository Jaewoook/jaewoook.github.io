import React, { ButtonHTMLAttributes } from "react";

const defaultClass = "px-3 py-1.5 border-2 border-black rounded bg-white hover:bg-black text-black hover:text-white transition-colors";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { className, ...rest } = props;
    return <button className={`${className ?? ''} ${defaultClass}`}
        {...rest} />
};
