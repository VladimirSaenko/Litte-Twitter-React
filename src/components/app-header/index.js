// import React, { useState } from "react";
import "./app-header.css";
import ContentEditable from "react-contenteditable";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const AppHeader = ({allPosts, likes}) => {
    // const [Username, setUsername] = useState('User Name');
    const [Username, setUsername] = useLocalStorage("username", "User Name");
    const onUserNameChange = (e) => {
        const username = e.target.value;
        setUsername(username)
    }
    return (<div className="app-header d-flex">
        <ContentEditable html={Username} onChange={onUserNameChange} title="change your name"/>
        {/* <h1 title="Change your name" contentEditable>UserName</h1> */}
        <h2> {allPosts} записей, из них {likes} понравилось</h2>
    </div>
    );
}

export default AppHeader;