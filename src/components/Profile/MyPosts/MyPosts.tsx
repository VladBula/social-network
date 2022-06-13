import React, {RefObject} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../App";
import {MyPostsPropsType} from './Post/MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


// type MyPostsPropsType = {
//     posts: Array<PostsType>
//     newPostText: string
//     updateNewPostTex:(text:string) => void
//     addPost: () => void
// }


const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const onAddPost = (values:FormValuesType) => {
        props.addPost(values.newPostText);

    }

    let postsElements = props.posts
        .map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>)


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

type FormValuesType = {
    newPostText:string
}

const AddNewPostForm :React.FC<InjectedFormProps<FormValuesType>> = (props)=> {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<FormValuesType>({
    form: 'profileAddNewPostForm'
})(AddNewPostForm)

export default MyPosts;