import React from "react";
import "./Search.css";
import { useState, useEffect } from "react";

import Card from "./card";

function Search(props) {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [repoCount, setRepoCount] = useState(0);
    const [imgURL, setImgURL] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [joinedDate, setJoinedDate] = useState(null);
    const [bio, setBio] = useState("Oops! You need a cool bio");
    const [followers, setFollowers] = useState(0);
    const [twitterLink, setTwitterLink] = useState("");
    const [blog, setBlog] = useState("");

    useEffect(() => {
        fetch("https://api.github.com/users/PrathamKumar14")
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    }, []);

    function setData(data) {
        setName(data.name);
        setUsername(data.login);
        setRepoCount(data.public_repos);
        setImgURL(data.avatar_url);
        setCompany(data.company);
        setLocation(data.location);
        setJoinedDate(data.created_at.substring(0, 10));
        setBio(data.bio);
        setFollowers(data.followers);
        setTwitterLink(`https://twitter.com/${data.twitter_username}`);
        setBlog(data.blog);
    }

    return (
        <div>
            <form className="form" action="">
                <input className="input" type="text" placeholder="Enter Your Username" />
                <input className="btn" type="submit"/>
            </form>
            <Card name={name}
                  repo={repoCount}
                  url={imgURL}
                  company={company}
                  location={location}
                  date={joinedDate} 
                  bio={bio}
                  followers={followers}
                  twitter={twitterLink}
                  blog={blog}
            />
        </div>
        
    )
}

export default Search;