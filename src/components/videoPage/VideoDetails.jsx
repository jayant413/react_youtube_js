import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../../App";
import LeftBar from "../commonComponents/LeftBar";
import ReactPlayer from "react-player/youtube";
import VideoRelatedCard from "./VideoRelatedCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiOutlineBell,
} from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { TfiDownload } from "react-icons/tfi";
import { fetchApiData } from "../../api/api";
import { getVideoDetail } from "../../store/details";
import useFetch from "../../hook/useFetch";
import { abbreviateNumber } from "js-abbreviation-number";

const VideoDetails = () => {
  const [liked, setLiked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const { menu, setMenu, setLoading, setCategory } = useContext(Context);
  const dispatch = useDispatch();
  const { vd } = useSelector((state) => state.video);
  const { url } = useSelector((state) => state.data);
  const { id } = useParams();
  const { loading } = useFetch(`v1/video/related-contents/?id=${id}`);

  useEffect(() => {
    setLoading(loading);
    document.title = `${vd?.title} - YouTube`;
  }, [loading]);

  useEffect(() => {
    setMenu(false);
    setCategory("");
    fetchApiData(`v2/video/details/?id=${id}`).then((res) => {
      console.log(res);
      dispatch(getVideoDetail(res));
    });
  }, [id]);

  return (
    <VideoPage>
      <div className="vp-left-bar">{menu && <LeftBar />}</div>
      {loading && (
        <LoadingSkeleton>
          <div className="ls-video-detail">
            <div className="ls-video"></div>
            <div className="ls-detail"></div>
          </div>
          <div className="ls-related-video">
            <div className="ls-rv-area"></div>
          </div>
        </LoadingSkeleton>
      )}
      {!loading && (
        <div className={`vp-video-related ${menu ? "vp-vr-opacity" : ""}`}>
          <div className="vp-video-detail">
            <div className="vp-video">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
                width="100%"
                height="100%"
                style={{ backgroundColor: "#000000" }}
                playing={true}
              />
            </div>
            <div className="vp-detail ">
              <div className="vp-detail-title">{vd?.title}</div>
              <div className="vp-detail-avatar-stats">
                <div className="vp-detail-stats-left">
                  <div className="vp-detail-avatar">
                    <img src={vd?.author?.avatar?.[0]?.url} alt="" />
                  </div>
                  <div className="vp-author-name-subscriber">
                    <span className="vp-author-name">{vd?.author?.title}</span>
                    <span className="vp-author-subscriber">
                      {vd?.author?.stats?.subscribersText}
                    </span>
                  </div>
                  <button
                    className={`vp-subscribe-btn ${
                      subscribed ? "" : "vp-subscribed-btn"
                    }`}
                    onClick={() => {
                      setSubscribed(!subscribed);
                    }}
                  >
                    {subscribed && (
                      <button>
                        <AiOutlineBell />
                      </button>
                    )}
                    {subscribed ? "Subscribed" : "Subscribe"}{" "}
                  </button>
                </div>
                <RightStats>
                  <button
                    className="vp-detail-like-btn"
                    onClick={() => {
                      setLiked(!liked);
                    }}
                  >
                    {liked ? (
                      <FcLike className="vp-detail-like-icon" />
                    ) : (
                      <AiOutlineLike className="vp-detail-like-icon" />
                    )}
                    {`${abbreviateNumber(vd?.stats?.likes, 1)}`}
                  </button>
                  <span className="vp-detail-stats-like-vr"></span>
                  <button className="vp-detail-dislike-btn">
                    <AiOutlineDislike className="vp-detail-dislike-icon" />
                  </button>
                  <button className="vp-detail-stats-share">
                    <BiShare className="vp-detail-share-icon" />
                    Share
                  </button>
                  <button className="vp-detail-download">
                    <TfiDownload className="vp-detail-download-icon" />
                    Download
                  </button>
                  <button className="vp-detail-stats-option">...</button>
                </RightStats>
              </div>
            </div>
          </div>
          <RelatedArea>
            {!loading &&
              url?.contents?.map((item, idx) => {
                return <VideoRelatedCard video={item?.video} key={idx} />;
              })}
          </RelatedArea>
        </div>
      )}
    </VideoPage>
  );
};

export default VideoDetails;

const LoadingSkeleton = styled.div`
  background-color: black;
  width: 100vw;
  height: calc(100vh - 4.3rem);
  display: flex;

  .ls-video-detail {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    margin: 0 0 0 auto;
    .ls-video {
      background-color: #303030;
      width: 50rem;
      height: 30rem;
      margin: 1rem auto 1rem auto;
      border-radius: 5%;
    }
    .ls-detail {
      background-color: #303030;
      width: 50rem;
      height: 10rem;
      margin: 1rem auto 1rem auto;
      border-radius: 5%;
    }
  }
  .ls-related-video {
    width: 33%;
    height: calc(100vh - 4.3rem);
    margin: 0 auto 0 0;
    .ls-rv-area {
      background-color: #303030;
      height: calc(100vh - 6rem);
      width: 25rem;
      margin: 1rem auto 1rem auto;
      border-radius: 5%;
    }
  }
`;

const VideoPage = styled.div`
  position: fixed;
  height: calc(100vh - 4.3rem);
  .vp-left-bar {
    position: absolute;
    z-index: 2;
  }
  .vp-video-related {
    @media screen and (max-width: 1000px) {
      display: flex;
      flex-direction: column;
    }
    background-color: black;
    height: 100%;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    &.vp-vr-opacity {
      opacity: 0.8;
    }
    .vp-video-detail {
      width: 60%;
      height: 100%;
      background-color: transparent;
      @media screen and (max-width: 1000px) {
        width: 100%;
        height: 30rem;
      }
      .vp-video {
        background-color: blue;
        width: 55vw;
        height: 65vh;
        margin: 1rem auto 1rem auto;
        @media only screen and (max-width: 1000px) {
          width: 25rem;
          height: 20rem;
          transform: translateY(-2rem);
        }
      }
      .vp-detail {
        color: white;
        background-color: black;
        width: 55vw;
        height: 8rem;
        overflow-y: hidden;
        margin: 1rem auto 2rem auto;
        padding: 0.3rem 0.5rem 0 0.5rem;
        @media screen and (max-width: 1000px) {
          width: 100%;
          height: 15rem;
          transform: translateY(-3.5rem);
        }
        .vp-detail-title {
          margin-bottom: 0.5rem;
          font-weight: 600;
          font-size: 1.2rem;
        }
        .vp-detail-avatar-stats {
          display: flex;
          justify-content: space-between;
          @media screen and (max-width: 1000px) {
            display: flex;
            flex-direction: column;
          }
          .vp-detail-stats-left {
            display: flex;

            .vp-detail-avatar {
              height: 3rem;
              width: 3rem;
              img {
                height: 100%;
                width: 100%;
                border-radius: 100%;
                object-fit: cover;
              }
            }
            .vp-author-name-subscriber {
              display: flex;
              flex-direction: column;
              margin: 0 2.5rem 0 1rem;
              font-weight: 400;
              .vp-author-name {
                font-size: 1rem;
              }
              .vp-author-subscriber {
                font-size: 0.8rem;
                opacity: 70%;
              }
            }
            .vp-subscribe-btn {
              background-color: #fff;
              color: black;
              margin: auto 0 auto 0;
              font-size: 1rem;
              display: grid;
              place-content: center;
              grid-template-columns: auto auto;
              font-weight: 600;
              position: relative;
              z-index: 2;
              height: 2rem;
              padding: 0.5rem 0.9rem;
              border-radius: 2rem;
              button {
                font-size: 1.4rem;
                transform: translateX(-0.2rem);
                padding: 0.1rem;
              }
              &:hover {
                background-color: #dbd9d9;
              }
              &.vp-subscribed-btn {
                color: white;
                background-color: red;
              }
            }
          }
        }
      }
    }
  }
`;

const RightStats = styled.div`
  @media screen and (max-width: 1000px) {
    margin-top: 0.5rem;
  }
  /* transform: translateY(0.2rem); */
  display: flex;
  align-content: center;
  justify-content: center;
  .vp-detail-like-btn {
    height: 2rem;
    background-color: #303030;
    width: fit-content;
    font-weight: 600;
    position: relative;
    display: flex;
    padding: 0.2rem 0.7rem;
    border-radius: 2rem 0 0 2rem;
    .vp-detail-like-icon {
      margin: 0 0.4rem 0 0.1rem;
      transform: translateY(0.3rem);
      font-size: 1rem;
    }
    &:hover {
      background-color: #282727;
    }
  }
  .vp-detail-stats-like-vr {
    height: 1.8rem;
    margin-top: 0.1rem;
    transform: translateX(-0.3rem);
    border: 1px solid gray;
  }
  .vp-detail-dislike-btn {
    height: 2rem;
    background-color: #303030;
    width: fit-content;
    display: flex;
    padding: 0.2rem 0.7rem;
    border-radius: 0 2rem 2rem 0;
    transform: translateX(-0.3rem);
    position: relative;
    &:hover {
      background-color: #282727;
    }
    .vp-detail-dislike-icon {
      margin: 0 0.2rem;
      transform: translateY(0.3rem);
      font-size: 1rem;
    }
  }
  .vp-detail-stats-share {
    height: 2.2rem;
    background-color: #303030;
    width: fit-content;
    font-weight: 600;
    display: grid;
    place-content: center;
    grid-template-columns: auto auto;
    margin: 0 1.5rem 0 1.5rem;
    padding: 0.2rem 0.9rem;
    border-radius: 2rem;
    position: relative;
    &:hover {
      background-color: #282727;
    }

    .vp-detail-share-icon {
      transform: scaleX(-1) translateY(0.3rem) translateX(0.2rem);
    }
  }
  .vp-detail-download {
    display: grid;
    place-content: center;
    height: 2.2rem;
    background-color: #303030;
    border-radius: 2rem;
    margin: 0 0.5rem 0 0.5rem;
    padding: 0.5rem 1rem;
    font-weight: 600;
    grid-template-columns: auto auto;
    position: relative;
    .vp-detail-download-icon {
      transform: translateX(-0.3rem) translateY(0.2rem);
    }
    &:hover {
      background-color: #282727;
    }
  }

  .vp-detail-stats-option {
    @media screen and (max-width: 1000px) {
      display: none;
    }
    width: 2.2rem;
    height: 2.2rem;
    background-color: #303030;
    border-radius: 50%;
    margin: 0 0.5rem;
    letter-spacing: 0.2rem;
    font-weight: 600;
    font-weight: 600;
    display: grid;
    &:hover {
      background-color: #282727;
    }
  }
`;

const RelatedArea = styled.div`
  @media screen and (max-width: 1000px) {
    width: 100%;
    /* height: 0rem; */
  }
  background-color: black;
  width: 33%;
  height: calc(100vh - 4.3rem);
  overflow-y: auto;
  color: white;
  padding: 1rem 0.2rem 1rem 0.2rem;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #5f5e5e;
    border-radius: 10rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #414141;
  }
`;
