import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route, Link} from "react-router-dom";
import state, {RootStateType} from "./redux/state";

// export type MyPostsPropsType={
//     posts:Array<PostsType>
// }
//
// export type PostsType={
//     id:number
//     message:string
//     likesCount:number
// }
//
// let posts = [
//     {id: 1, message: 'Hi, hoe are you?', likesCount: 12},
//     {id: 2, message: 'It is my first post', likesCount: 11},
// ]

function App(props:RootStateType) {



    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs" element={<Dialogs/>}/>
                    <Route path="/profile" element={<Profile posts={state.profilePage.posts}/>}/>
                    {/*<Dialogs/>
               <Profile/>*/}
                </Routes>
            </div>


        </div>

    );
}

export default App;
