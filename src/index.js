import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import user from "./user.json";

//  "name": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308

const userProfile = (
  <div className="profile">
    <div className="description">
      <img src={user.avatar} alt="Аватар пользователя" className="avatar" />
      <p className="name">{user.name}</p>
      <p className="tag">@{user.tag}</p>
      <p className="location">{user.location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers: </span>
        <span className="quantity">{user.stats.followers}</span>
      </li>
      <li>
        <span className="label">Views: </span>
        <span className="quantity">{user.stats.views}</span>
      </li>
      <li>
        <span className="label">Likes: </span>
        <span className="quantity">{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);

console.log(userProfile);

ReactDOM.render(userProfile, document.getElementById("root"));
