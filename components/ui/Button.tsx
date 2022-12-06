import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    disabled?: boolean;
    myType?: "normal" | "danger" | undefined;
};

export const Button = (props: ButtonProps) => {
    const { children, onClick, disabled, myType } = props;
    return (
        <button
            className={`px-3 py-1 border-2 border-gray-200 rounded-lg 
             text-white cursor-pointer bg-slate-800
            hover:bg-slate-800/90 w-full h-9`}
            onClick={onClick}
            disabled={disabled}



        >
            {children}
        </button>
    );
};
