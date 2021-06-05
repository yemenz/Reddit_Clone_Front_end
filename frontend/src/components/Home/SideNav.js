import React from "react";
import "./SideNav.css";


import { Link } from "react-router-dom";

function SideNav() {
  const menus = [
    { to: "/popular", text: "Popular" },
    { to: "/all", text: "All" },
    { to: "/random", text: "Random" },
  ];

  const subreddits = [
    "askreddit",
    "worldnews",
    "videos",
    "funny",
    "todayileaned",
    "pics",
    "gaming",
    'movies',
    'news', 
    'gifs',
    'aww',
    'mildlyinteresting',
    'showerthoughts',
    'televison',
    'jokes',
    'science',
    'soccer',
    'internetisbeautiful',
    'dataisbeautiful',
    'askscience'
  ];
  return (
    <div className="sidenav">
      

      <div className="sidenav__search">
        <input type="text" name="search" placeholder="search" />
        <i className="fas fa-search"></i>
      </div>

      <div className="sidenav__link">
        <ul className="sidenav__menu">
          {menus.map((menu) => (
            <li>
              <Link to={menu.to}>{menu.text}</Link>
            </li>
          ))}
        </ul>
        <hr />
        <ul className="sidenav__subreddit">
          {subreddits.map(subreddit => (
              <li><Link to={`/r/${subreddit}`}>{subreddit}</Link></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
