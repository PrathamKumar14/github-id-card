import React from "react";
import "./Search.css";
import { useEffect } from "react";

function Search() {

    return (
        <form className="form" action="">
            <input className="input" type="text" placeholder="Enter Your Username" />
            <input className="btn" type="submit"/>
        </form>
    )
}

export default Search;