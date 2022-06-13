import React from "react";

type TextareaPropsType = {

}

export const Textarea:React.FC<TextareaPropsType> = (props) => {
    return (
        <div>
            <textarea {...props}></textarea>
        </div>
    )
}



