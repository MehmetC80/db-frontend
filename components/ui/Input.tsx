import React from "react";

type InputProps = {
    type?: React.HTMLInputTypeAttribute | undefined;
    placeholder?: string;
    label?: string;
    value?: string | number | readonly string[] | undefined;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    autocomplete?: "on" | "off";
    onClick?: React.MouseEventHandler<HTMLInputElement> | undefined;

};

export const Input = (props: InputProps) => {
    const { type, placeholder, label, value, onChange, autocomplete, onClick } =
        props;
    return (
        <div className="">
            <div>
                <label className="block">{label}</label>
            </div>

            <input
                className="w-full mb-5 px-2 py-2  border-2  rounded-lg 
                          cursor-pointer "
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoComplete={autocomplete}
                onClick={onClick}
            />
        </div>
    );
};
