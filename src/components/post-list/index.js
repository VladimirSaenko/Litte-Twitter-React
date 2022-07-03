import React from "react";
import PostListItem from "../post-list-item";
import "./post-list.css";

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    // const onDelete = () => {
    //     console.log('delete');
    // }
    const elements = posts.map((item) => {
        const { id, ...itemProps} = item;
        // const { id: key, ...itemProps} = item;
        return (
            // <li key={key} className="list-group-item">
            <li key={id} className="list-group-item">
            {/* <PostListItem label={item.label} important={item.important}/> */}
            {/* <PostListItem onDelete={onDelete} {...itemProps}/> */}
            <PostListItem onDelete={() => onDelete(id)} {...itemProps} onToggleImportant={() => onToggleImportant(id)} onToggleLiked={() => onToggleLiked(id)}/>
            </li>
        )
    })
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;