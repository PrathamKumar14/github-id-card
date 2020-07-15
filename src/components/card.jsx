import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <a className="blog" href={props.blog}>
        <img src="https://img.icons8.com/ios/24/000000/domain.png" />
      </a>
      <h1 className="name">{props.name}</h1>
      <p className="repo">Repos: {props.repo}</p>
      <p className="company">Company: {props.company}</p>
      <img className="avatar" src={props.url} alt="" />
      <div className="line"></div>
      <p className="place">{props.location}</p>
      <p className="joined-date">{props.date}</p>
      <p className="bio">{props.bio}</p>
      <p className="followers">
        <i class="fa fa-users"></i>&nbsp;&nbsp;{props.followers}
      </p>
      <p className="twitter">
        <a href={props.twitter}>
          <i class="fa fa-twitter"></i>
        </a>
      </p>
    </div>
  );
}

export default Card;
