import React from "react";
import "./Search.css";
import { useState, useEffect } from "react";

import Card from "./card";

function Search(props) {
  const [isUserfound, setIsUserFound] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [repoCount, setRepoCount] = useState(0);
  const [imgURL, setImgURL] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [joinedDate, setJoinedDate] = useState(null);
  const [bio, setBio] = useState("");
  const [followers, setFollowers] = useState(0);
  const [twitterLink, setTwitterLink] = useState("");
  const [blog, setBlog] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/PrathamKumar14")
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
        }
        setData(data);
      });
  }, []);

  function setData(data) {
    setName(data.name);
    setUsername(data.login);
    setRepoCount(data.public_repos);
    setImgURL(data.avatar_url);
    setCompany(data.company);
    setLocation(data.location);
    setJoinedDate(data.created_at.substring(0, 10));
    if (data.bio == null) {
      setBio("Oops! You need a bio🙄");
    } else {
      setBio(data.bio);
    }
    setFollowers(data.followers);
    setTwitterLink(`https://twitter.com/${data.twitter_username}`);
    setBlog(data.blog);
  }

  function handleSearch(event) {
    setUsername(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setIsUserFound(false);
        } else {
          setData(data);
          setIsUserFound(true);
        }
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form" action="">
        <input
          onChange={handleSearch}
          className="input"
          type="text"
          placeholder="Enter Your Username"
        />
        <input className="btn" type="submit" />
      </form>

      {isUserfound ? (
        <Card
          name={name}
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
      ) : (
        <h1 className="error-msg">
          Oops!😐 Create an account &nbsp;
          <a style={{ textDecoration: "none" }} href="https://github.com/">
            here👉
          </a>
        </h1>
      )}
    </div>
  );
}

export default Search;
