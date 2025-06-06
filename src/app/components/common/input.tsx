'use client'
import { ChangeEvent } from "react";
import Icon from "./icon";
import { Icons } from "./icon/types";

type Props = {
    value?: string | number,
    placeholder?: string,
    className?: string,
    icon?: Icons,
    type?: 'text' | 'password' | 'email' | 'number',
    loading?: boolean,
    error?: boolean,
    disabled?: boolean,
    errorStr?: string,
    onChange?: (value: string | number) => void,
    onBlur?: () => void,
    onFocus?: () => void,
}

const Input = ({ value, placeholder, icon, type = 'text', loading, error, errorStr, disabled, className, onChange, onBlur, onFocus }: Props) => {

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange === undefined) return;
        const value = type === "number" ? parseInt(e.target.value) : e.target.value;
        onChange(value);
    }

    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            <div className={`flex items-center justify-between gap-2 px-4 py-3 rounded-full border   ${disabled ? "bg-slate-100" : "bg-white"} ${error ? "border-red-500" : "border-slate-300"}`}>
                <input
                    value={value}
                    onChange={change}
                    type={type}
                    onBlur={onBlur}
                    disabled={disabled}
                    onFocus={onFocus}
                    placeholder={placeholder}
                    className="w-full placeholder:text-slate-500 text-base text-slate-900 disabled:text-slate-400 outline-none" />
                {loading ? <span className="animate-pulse bg-slate-400 w-3 h-3 rounded-full flex-shrink-0" /> : null}
                {icon ? <Icon icon={icon} className="w-6 h-6 text-violet-600" /> : null}
            </div>

            {errorStr
                ? <div className="flex gap-1 items-center pl-2">
                    <span className="text-sm text-red-600">{errorStr}</span>
                </div>
                : null
            }
        </div>
    )
}

export default Input;