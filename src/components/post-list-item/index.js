// import React, { useState } from "react";
import React from "react";
import "./post-list-item.css";

const PostListItem = (props) => {
    const {label, onDelete, onToggleLiked, onToggleImportant, important, like} = props;
    // const [Like, setLike] = useState(false);
    // const [important, setImportant] = useState(false);

    // const onImportant = () => {
    //     setImportant(!important);
    //     console.log(important);
    // }
    // const onLike = () => {
    //     setLike(!Like);
    // }
    
    let importantClassName = "app-list-item d-flex justify-content-between";
    if(important) {
        importantClassName += " important";
    }
    if(like) {
        importantClassName += " like";
    }

    // const onDelete = () => {
    //     // console.log('delete');
    // }
    
    return(
        <div className={importantClassName}>
            {/* <span onClick={() => setLike(!Like)} className="app-list-item-label">
                {label}
            </span> */}
            <span onClick={onToggleLiked} className="app-list-item-label">
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                {/* <button onClick={() => setImportant(!important)} className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button> */}
                <button onClick={onToggleImportant} className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button onClick={onDelete} className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    );
}

export default PostListItem;