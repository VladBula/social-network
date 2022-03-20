import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import state, {PostsType} from "../../../redux/state";





const MyPosts = (props:PostsType) => {

    let postsElements = state.profilePage.posts
        .map(post => <Post message={post.message} likesCount={post.likesCount} id = {post.id}/>)

    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;