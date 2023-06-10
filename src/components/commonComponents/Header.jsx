import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ytLogo from "../../images/yt-logo.png";
import {
  IoIosSearch,
  IoIosMic,
  IoIosVideocam,
  IoIosNotifications,
  IoIosMenu,
} from "react-icons/io";
import { Context } from "../../App";

const Header = () => {
  const navigate = useNavigate();
  const { menu, setMenu, query, setQuery, setCategory } = useContext(Context);
  const search = (e) => {
    if ((e.key === "Enter" || e === "button") && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const img =
    "https://img.freepik.com/premium-photo/fire-alphabet-letter-j-isolated-black-background_564276-9243.jpg?w=2000";
  return (
    <Head>
      <div className="left-logo">
        <button
          className="left-menu-logo"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <IoIosMenu />
        </button>
        <img
          src={ytLogo}
          alt=""
          className="yt-logo"
          onClick={() => {
            navigate("/");
            setCategory("New");
          }}
        />
      </div>
      <div className="middle-search">
        <div className="input-left-search">
          <button
            className="search-left-button"
            onClick={() => {
              search("button");
            }}
          >
            <IoIosSearch className="search-left-button-icon" />
          </button>
          <span className="input-border"></span>
          <input
            type="text"
            placeholder="Search"
            className="input-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={search}
          />
        </div>
        <button
          className="search-right-button"
          onClick={() => {
            search("button");
          }}
        >
          <IoIosSearch />
        </button>
        <button className="voice-search">
          <IoIosMic />
        </button>
      </div>
      <div className="right-icons">
        <div className="right-icon-items">
          <button className="right-icon-item1">
            <IoIosVideocam />
          </button>
          <button className="right-icon-item2">
            <IoIosNotifications />
          </button>
        </div>
        <img src={img} alt="" className="right-icon-profile" />
      </div>
    </Head>
  );
};

export default Header;

const Head = styled.div`
  background-color: #0e0d0d;
  color: white;
  width: 100%;
  height: 4.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  .left-logo {
    display: grid;
    grid-template-columns: auto auto;
    place-content: center;
    width: 9rem;
    .left-menu-logo {
      background-color: transparent;
      color: white;
      font-size: 1.6rem;
      height: 2.2rem;
      width: 2.2rem;
      display: grid;
      place-content: center;
      border-radius: 50%;
      &:hover {
        background-color: #303030;
      }
    }
    .yt-logo {
      width: 100%;
      height: 1.2rem;
      padding-left: 0.5rem;
      transform: translateY(0.5rem);
      cursor: pointer;
      @media (max-width: 600px) {
        padding-left: 0;
      }
    }
  }
  .middle-search {
    display: flex;
    align-items: center;
    /* background-color: gray; */
    width: 40rem;
    height: 3rem;
    @media (max-width: 800px) {
      width: 20rem;
      transform: translateX(2rem);
    }

    .input-left-search {
      width: 100%;
      display: flex;
      position: relative;
      .search-left-button {
        height: 2.6rem;
        background-color: transparent;
        border: 1px solid #303030;
        width: 2.8rem;
        padding-left: 0.4rem;
        font-size: 1.2rem;
        display: grid;
        border-radius: 50% 0 0 50%;
        place-content: center;
        visibility: hidden;
      }
      .input-border {
        position: absolute;
        transform: translateX(1.5rem);
        width: 2.5rem;
        height: 2.6rem;
        background-color: transparent;
        border: 1px solid #303030;
        border-right: none;
        border-radius: 50% 0 0 50%;
        /* visibility: hidden; */
      }
      .input-search {
        width: 95%;
        background-color: transparent;
        border: 1px solid #303030;
        border-left: none;
        height: 2.6rem;
        outline: none;
        position: relative;
      }
      &:focus-within {
        .search-left-button {
          visibility: visible;
          border: 1px solid #167dfc;
          border-right: none;
        }
        .input-border {
          visibility: hidden;
        }
        .input-search {
          border: 1px solid #167dfc;
          border-left: none;
        }
      }
    }
    .search-right-button {
      height: 2.6rem;
      width: 5rem;
      font-size: 19px;
      background-color: #303030;
      border: none;
      color: white;
      border-radius: 0 1.5rem 1.5rem 0;
      display: grid;
      cursor: pointer;
      place-content: center;
      position: relative;
      &:hover {
        background-color: #252525;
        &:before {
          content: "Search";
          position: absolute;
          width: 80%;
          height: 70%;
          font-weight: 500;
          left: 0.4rem;
          border-radius: 0.3rem;
          font-size: 0.7rem;
          background-color: #484545;
          display: grid;
          place-content: center;
          transform: translateY(3.1rem);
          opacity: 80%;
        }
      }
    }
    .voice-search {
      background-color: #1b1a1a;
      color: white;
      display: grid;
      place-content: center;
      height: 2.2rem;
      width: 3rem;
      font-size: 1.4rem;
      border-radius: 50%;
      margin-left: 0.5rem;
      position: relative;
      border: none;
      cursor: pointer;
      &:hover {
        background-color: #303030;
        &:before {
          content: "Search with your voice";
          position: absolute;
          width: 9rem;
          height: 1.9rem;
          font-weight: 500;
          left: -3rem;
          border-radius: 0.3rem;
          font-size: 0.7rem;
          background-color: #484545;
          display: grid;
          place-content: center;
          transform: translateY(3rem);
          opacity: 80%;
        }
      }
    }
  }
  /* .demo{
            width: 20rem;
            height: 4rem;
            display: grid;
            place-content: center;
            background-color: blue;
            .demo-icon{
                visibility: hidden;
            }
            &:focus-within{
                background-color: red;
                border: 2px solid blue;
                .demo-icon{
                    visibility: visible;
                }
            }
        } */
  .right-icons {
    display: flex;
    align-items: center;
    transform: translateX(-2rem);
    @media (max-width: 1200px) {
      transform: translateX(-0.3rem);
    }
    .right-icon-items {
      transform: translateX(-1rem);
      display: flex;
      .right-icon-item1 {
        display: grid;
        place-content: center;
        background-color: #1b1a1a;
        outline: none;
        border: none;
        color: white;
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 50%;
        font-size: 1.2rem;
        margin: 0 0.2rem;
        cursor: pointer;
        position: relative;

        &:hover {
          background-color: #303030;
          &:before {
            content: "Create";
            position: absolute;
            margin: auto;
            font-weight: 600;
            transform: translateY(3rem);
            display: grid;
            place-content: center;
            border-radius: 15%;
            padding: 0 0.4rem;
            width: fit-content;
            background-color: #484545;
            height: 1.8rem;
            opacity: 80%;
            font-size: 0.7rem;
          }
        }
      }
      .right-icon-item2 {
        display: grid;
        place-content: center;
        background-color: #1b1a1a;
        outline: none;
        border: none;
        color: white;
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 50%;
        font-size: 1.2rem;
        cursor: pointer;
        position: relative;

        &:hover {
          background-color: #303030;
          &:before {
            content: "Notification";
            position: absolute;
            margin: auto;
            font-weight: 600;
            transform: translateY(3rem);
            display: grid;
            place-content: center;
            border-radius: 15%;
            padding: 0 0.4rem;
            left: -0.8rem;
            width: fit-content;
            background-color: #484545;
            height: 1.8rem;
            opacity: 80%;
            font-size: 0.7rem;
          }
        }
      }
      @media (max-width: 800px) {
        visibility: hidden;
      }
    }
    .right-icon-profile {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;

      &:before {
        content: "Hello";
        position: absolute;
      }

      &:hover {
        transform: scale(1.2, 1.2);
        box-shadow: 0px 0px 8px 5px rgb(109, 106, 106);
      }
    }
  }
`;

// .input-left-search{
//     width: 100%;
//     display: flex;
//     background-color: #0e0d0d;
//     border: 1px solid #303030;
//     border-radius: 1.5rem 0 0 1.5rem;
//     .search-left-button{
//         display:grid;
//         place-content: center;
//         height: 2.5rem;
//         width: 3rem;
//         color: white;
//         font-size: 19px;
//         background-color: transparent;
//         border: none;
//         cursor: pointer;
//         &:focus{
//         border: 1px solid #167dfc ;
//         border-radius: 1.5rem 0 0 1.5rem;
//     }
//     }
//     .input-search{
//         border: none;
//         height: 2.5rem;
//         width: 100%;
//         padding: 0 0.2rem;
//         outline: none;
//         background-color: transparent;
//         color: white;
//         &:focus{
//         border: 1px solid #167dfc ;
//     }
//     }
// }
