import React, { useContext } from "react";
import styled from "styled-components";
import {
  BsFire,
  BsMusicNoteList,
  BsNewspaper,
  BsTrophy,
  BsLightbulb,
  BsClock,
  BsChevronDown,
} from "react-icons/bs";
import { BiShoppingBag, BiMoviePlay, BiLike, BiHistory } from "react-icons/bi";
import { MdWifiTethering } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { GiLargeDress } from "react-icons/gi";
import {
  MdOutlineVideoLibrary,
  MdSlowMotionVideo,
  MdSubscriptions,
} from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";

import { Context } from "../../App";
import { useNavigate } from "react-router-dom";

const LeftBar = () => {
  const { category, setCategory } = useContext(Context);
  const navigate = useNavigate();

  const selectCategory = (selectedCategory) => {
    setCategory(selectedCategory);
    navigate("/");
  };

  const leftNavTop = [
    { name: "New", icon: <AiFillHome />, type: "category" },
    { name: "Shorts", icon: <MdSlowMotionVideo />, type: "category" },
    { name: "Subscriptions", icon: <MdSubscriptions />, type: "category" },
  ];
  const leftNavMenu = [
    { name: "Libaray", icon: <MdOutlineVideoLibrary />, type: "menu" },
    { name: "History", icon: <BiHistory />, type: "menu" },
    { name: "Your videos", icon: <RiVideoLine />, type: "menu" },
    { name: "Watch later", icon: <BsClock />, type: "menu" },
    { name: "Liked videos", icon: <BiLike />, type: "menu" },
    { name: "Show more ", icon: <BsChevronDown />, type: "menu" },
  ];

  const leftNavExplore = [
    { name: "Trending", icon: <BsFire />, type: "category" },
    { name: "Shopping", icon: <BiShoppingBag />, type: "category" },
    { name: "Music", icon: <BsMusicNoteList />, type: "category" },
    { name: "Movies", icon: <BiMoviePlay />, type: "category" },
    { name: "Live", icon: <MdWifiTethering />, type: "category" },
    { name: "Gaming", icon: <SiYoutubegaming />, type: "category" },
    { name: "News", icon: <BsNewspaper />, type: "category" },
    { name: "Sports", icon: <BsTrophy />, type: "category" },
    { name: "Learning", icon: <BsLightbulb />, type: "category" },
    { name: "Fashion", icon: <GiLargeDress />, type: "category" },
  ];

  return (
    <Bar>
      <div className="lb-menu-bar">
        {leftNavTop.map((item, id) => {
          return (
            <button
              className={`lb-menu-bar-btn ${
                category === item.name ? "categorySelected" : ""
              }`}
              key={id}
              onClick={() => {
                selectCategory(item.name);
              }}
            >
              <span className="lb-menu-btn-icon">{item.icon}</span>
              <span className="lb-menu-btn-name">
                {item.name === "New" ? "Home" : item.name}
              </span>
            </button>
          );
        })}
      </div>

      <div className="lb-hr"></div>
      <div className="lb-menu-bar">
        {leftNavMenu.map((item, id) => {
          return (
            <button className="lb-menu-bar-btn" key={id}>
              <span className="lb-menu-btn-icon">{item.icon}</span>
              <span className="lb-menu-btn-name">{item.name}</span>
            </button>
          );
        })}
      </div>
      <div className="lb-hr"></div>
      <div className="lb-explore">
        <span className="lb-explore-title">Explore</span>
        {leftNavExplore.map((item, id) => {
          return (
            <button
              className={`lb-explore-btn ${
                category === item.name ? "categorySelected" : ""
              }`}
              key={id}
              onClick={() => {
                selectCategory(item.name);
              }}
            >
              <span className="lb-explore-btn-icon">{item.icon}</span>
              <span className="lb-explore-btn-name">{item.name}</span>
            </button>
          );
        })}

        <hr />
        <p className="mb-2 mt-2">&copy; created by Jayant S</p>
        <br />
      </div>
    </Bar>
  );
};

export default LeftBar;

const Bar = styled.div`
  background-color: #171616;
  width: 16rem;
  height: calc(100vh - 4.3rem);
  color: white;
  overflow-y: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #303030;
    border-radius: 10rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #414141;
  }

  @media (max-width: 800px) {
    width: 15rem;
  }
  .lb-menu-bar {
    display: flex;
    flex-direction: column;
    .lb-menu-bar-btn {
      margin: 0.1rem 0rem 0.1rem 0;
      background-color: transparent;
      color: white;
      display: flex;
      height: 2.7rem;
      align-items: center;
      padding-left: 0.6rem;
      border-radius: 0.7rem;
      border: none;
      &.categorySelected {
        background-color: #303030;
      }
      .lb-menu-btn-icon {
        font-size: 1.2rem;
        margin-right: 1rem;
      }
      &:hover {
        background-color: #303030;
      }
    }
  }
  .lb-hr {
    border: 1px solid #303030;
    margin: 1rem 0 1rem 0;
  }
  .lb-explore {
    .lb-explore-title {
      display: flex;
      transform: translateX(0.7rem);
      margin: 0 0 0.5rem 0;
      font-size: 1.1rem;
    }
    display: flex;
    flex-direction: column;

    .lb-explore-btn {
      margin: 0.1rem 0rem 0.1rem 0;
      background-color: transparent;
      color: white;
      border: none;
      display: flex;
      height: 2.7rem;
      align-items: center;
      padding-left: 0.6rem;
      border-radius: 0.7rem;
      &.categorySelected {
        background-color: #303030;
      }
      .lb-explore-btn-icon {
        font-size: 1.2rem;
        margin-right: 1rem;
      }
      &:hover {
        background-color: #303030;
      }
    }
  }
`;
