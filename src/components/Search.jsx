import React from "react";
import "./Search.css";
import { useState, useEffect } from "react";

function Search() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {
        fetch("https://api.github.com/users/PrathamKumar14")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, []);

    function setData(data) {
        setName(data.name);
        setUsername(data.login);
    }

    return (
        <form className="form" action="">
            <input className="input" type="text" placeholder="Enter Your Username" />
            <input className="btn" type="submit"/>
        </form>
    )
}

export default Search;