import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import AppHeader from "../app-header";
import PostAddForm from "../post-add-form";
import PostList from "../post-list";
// import PostListItem from "../post-list-item";
import PostStatusFilter from "../post-status-filter";
import SearchPanel from "../search-panel";
import "./app.css";

const App = () => {
    // const [data, setData] = useState([
    //     {label: 'Kek', important: false, like: false, id: '1'},
    //     {label: 'lol', important: false, like: false, id: '2'},
    //     {label: 'sample text', important: false, like: false, id: '3'},
    // ]);

    // const data = [
    //     {label: 'Kek', important: true, id: '1'},
    //     {label: 'lol', important: false, id: '2'},
    //     {label: 'sample text', important: false, id: '3'},
    // ];

    // return (<h1>Hello World</h1>);

    // const [data, setData] = useState(() => {
    //     const saved = localStorage.getItem("data");
    //     const initialValue = JSON.parse(saved);
    //     const defaultValue = [
    //         {label: 'Kek', important: false, like: false, id: '1'},
    //         {label: 'lol', important: false, like: false, id: '2'},
    //         {label: 'sample text', important: false, like: false, id: '3'},
    //     ];
    //     // return [
    //     // {label: 'Kek', important: false, like: false, id: '1'},
    //     // {label: 'lol', important: false, like: false, id: '2'},
    //     // {label: 'sample text', important: false, like: false, id: '3'},
    //     // ];
    //     return initialValue || defaultValue;
    // })

    // useEffect(() => {
    //     localStorage.setItem("data", JSON.stringify(data));
    // }, [data]);
    
    const defaultValue = [
        {label: 'Пример текста', important: false, like: false, id: '1'},
        {label: 'Example text', important: false, like: false, id: '2'},
        {label: 'Sample text', important: false, like: false, id: '3'},
    ];
    const [data, setData] = useLocalStorage("data", defaultValue);

    // let maxId = 4;

    const [maxId, setMaxId] = useState(4);
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const onDelete = (id) => {
        // console.log('delete');
        // console.log(id);
        const indexMessage = data.findIndex(msg => msg.id === id);
        console.log(indexMessage);
        const before = data.slice(0, indexMessage);
        const after = data.slice(indexMessage + 1);
        const newData = [...before, ...after];
        setData(newData);
    }

    const onAdd = (body) => {
        // console.log(body);
        // maxId++;
        setMaxId(maxId + 1);
        const newMessage = {
            label: body,
            important: false,
            like: false,
            id: maxId
        }
        const newData = [...data, newMessage];
        setData(newData);
    }

    const onToggleImportant = (id) => {
        // console.log(`important ${id}`);
        const indexMessage = data.findIndex(msg => msg.id === id);
        const oldMessage = data[indexMessage];
        console.log(oldMessage);
        const updateMessage = {...oldMessage, important: !oldMessage.important};
        const before = data.slice(0, indexMessage);
        const after = data.slice(indexMessage + 1);
        const newData = [...before, updateMessage ,...after];
        setData(newData);
    }

    const onToggleLiked = (id) => {
        // console.log(`Liked ${id}`);
        const indexMessage = data.findIndex(msg => msg.id === id);
        const oldMessage = data[indexMessage];
        console.log(oldMessage);
        const updateMessage = {...oldMessage, like: !oldMessage.like};
        const before = data.slice(0, indexMessage);
        const after = data.slice(indexMessage + 1);
        const newData = [...before, updateMessage ,...after];
        setData(newData);
    }

    const searchPost = (items, term) => {
        if(term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    }

    const filterPost = (items, filter) => {
        if(filter === 'like') {
            return items.filter(item => item.like);
        }
        else if(filter === 'all') {
            return items;
        }
    }

    const allPosts = data.length;
    const likes = data.filter(msg => msg.like).length;
    // const likes = data.filter(msg => msg.like === true);

    const visiblePosts = filterPost(searchPost(data, term), filter);

    // const filterPosts = filterPost(visiblePosts, filter);

    return (
    <div className="app">
        <AppHeader
            allPosts={allPosts}
            likes={likes}
        />
        <div className="search-panel d-flex">
            <SearchPanel
                onUpdateSearch={setTerm}
            />
            <PostStatusFilter
                filter={filter}
                onFilterSelect={setFilter}
            />
        </div>
    <PostList 
        onToggleImportant={onToggleImportant}
        onToggleLiked={onToggleLiked} 
        onDelete={onDelete} 
        // posts={data}
        posts={visiblePosts}
    />
    <PostAddForm onAdd={onAdd}/>
    {/* <PostListItem/> */}
    </div>
    )
}

export default App;