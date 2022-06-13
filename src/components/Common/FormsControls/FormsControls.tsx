import React from "react";
import {WrappedFieldProps} from "redux-form";
import s from "./FormsControls.module.css"

export const FormControl: React.FC<WrappedFieldProps> = ({input, meta, ...restProps}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {restProps.children}
            </div>
            {hasError && <span>{meta.error}</span>}

        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
   const {input, meta, children, ...restProps}=props

    return (
       <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps}=props

    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}




