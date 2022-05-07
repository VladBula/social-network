import React, {RefObject} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../App";
import { MyPostsPropsType } from './Post/MyPostsContainer';


// type MyPostsPropsType = {
//     posts: Array<PostsType>
//     newPostText: string
//     updateNewPostTex:(text:string) => void
//     addPost: () => void
// }


const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
         props.addPost();
        //props.dispatch(addPostAC());
        //rerenderEntireTree()

    }

    const onPostChange = () => {
        {
            let text = newPostElement.current?.value
            if (text) {
                 props.updateNewPostTex(text)
                //props.dispatch(updateNewPostTextAC(text))
            }
        }
    }

    let postsElements = props.posts
        .map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>)


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement} value={props.newPostText}
                               onChange={onPostChange}/></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;