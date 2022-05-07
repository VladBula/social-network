import React from 'react';
import s from './Post.module.css'


type PostPropsType = {
    message: string | undefined
    likesCount:number
    id:number
}
export const Post = (props:PostPropsType) => {
    return <div className={s.item}>
        <img src='https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg' alt='ava'/>
        {props.message}
        <div>
            <span>like</span> {props.likesCount}
        </div>
    </div>

}