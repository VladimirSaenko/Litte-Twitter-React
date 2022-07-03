import { useState, useEffect } from "react";

/*
const [data, setData] = useState([
        {label: 'Kek', important: false, like: false, id: '1'},
        {label: 'lol', important: false, like: false, id: '2'},
        {label: 'sample text', important: false, like: false, id: '3'},
    ]);

    // const data = [
    //     {label: 'Kek', important: true, id: '1'},
    //     {label: 'lol', important: false, id: '2'},
    //     {label: 'sample text', important: false, id: '3'},
    // ];

    const [data, setData] = useState(() => {
        const saved = localStorage.getItem("data");
        const initialValue = JSON.parse(saved);
        const defaultValue = [
            {label: 'Kek', important: false, like: false, id: '1'},
            {label: 'lol', important: false, like: false, id: '2'},
            {label: 'sample text', important: false, like: false, id: '3'},
        ];
        return [
        {label: 'Kek', important: false, like: false, id: '1'},
        {label: 'lol', important: false, like: false, id: '2'},
        {label: 'sample text', important: false, like: false, id: '3'},
        ];
        return initialValue || defaultValue;
    })
*/

function getStorageValue(key, defaultValue) {
    const saved = localStorage.getItem(key);
    const initialValue = JSON.parse(saved);
    return initialValue || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
        // const saved = localStorage.getItem(key);
        // const initialValue = JSON.parse(saved);
        // return initialValue || defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

// const [a, b] = [12, 123];
