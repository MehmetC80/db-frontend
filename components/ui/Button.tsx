import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    disabled?: boolean;
    colors?: "normal" | "danger"
};

export const Button = (props: ButtonProps) => {
    const { children, onClick, disabled, colors = "normal" } = props;
    colors === "normal" ? "slate-800" : "red-600"
    return (
        <button
            className={`px-3 py-1 border-2 border-gray-200 rounded-lg w-full h-9
             text-white cursor-pointer ${colors === "normal" && 'bg-slate-800 hover:bg-slate-800/90 '} 
             ${colors === "danger" && "bg-red-600 hover:bg-red-600/80"}  `}
            onClick={onClick}
            disabled={disabled}



        >
            {children}
        </button>
    );
};
