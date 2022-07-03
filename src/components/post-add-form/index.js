import React, { useState } from "react";
import "./post-add-form.css";

const PostAddForm = ({onAdd}) => {
    const [text, setText] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(text);
        setText('');
    }

    const onValueChange = (e) => {
        // console.log(e.target.value);
        setText(e.target.value);
    }

    return (
    <form onSubmit={onSubmit} className="d-flex bottom-panel">
        <input type="text" placeholder="О чем вы сейчас думаете?" className="form-control new-post-label" onChange={onValueChange} value={text}></input>
        <button type="submit" className="btn btn-outline-secondary">Добавить</button>
    </form>
    );
}

export default PostAddForm;