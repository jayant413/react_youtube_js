import React, { useState } from 'react'
import styled from 'styled-components'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import { useNavigate } from 'react-router-dom';

const VideoCard = ({data}) => {
    const [thumbnail , setThumbnail] = useState(data?.thumbnails?.[0].url)
    const navigate = useNavigate();
    const movingThumbnail = () =>{
        setThumbnail((data?.movingThumbnails?.[0].url)?data?.movingThumbnails?.[0].url:data?.thumbnails?.[0].url)
    }
    const staticThumbnail = () =>{
        setThumbnail(data?.thumbnails?.[0].url)
    }

    const videoDetails = () =>{
        navigate(`/video/${data?.videoId}`)
    }
  return (
    <Video>
        <div className="video-img" onMouseEnter={movingThumbnail} onMouseLeave={staticThumbnail}>
        <img src={thumbnail} alt="" className='thumbnail' onClick={videoDetails}/>
        </div>
        
        <div className="video-details">
            <div className="video-details-profile">
                <img src={data?.author?.avatar?.[0]?.url} alt="" className='video-author-profile' />
            </div>
            <div className="video-detail">
                <span className="video-title">{data?.title.slice(0,45)}...</span>
                <span className="video-author-name">{data?.author?.title} {data?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && <BsFillCheckCircleFill className='video-verify'/> }</span>
                <div className="video-views-time">
                    <span className="video-views">{`${abbreviateNumber(data?.stats?.views , 2)}`} views</span>
                    <span className="video-gap">.</span>
                    <span className="video-time">{data?.publishedTimeText}</span>
                </div>
            </div>
        </div>
    </Video>
  )
}

export default VideoCard


const Video = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1rem 0 ;
      /* justify-content: center; */
      .video-img{width: 296px;
      height: 175px;
      display: flex;
      justify-content: center;
      margin: 1rem 0.5rem 0.2rem 0.5rem;
      background-color: #303030;
      border-radius: 0.5rem;
      .thumbnail{
        width: 100%;
        height: 100%;
        object-fit: cover; 
        border-radius: 0.5rem;
      }
    }
    .video-details{
        background-color: black;
        border: none;
        height: 80px;
        width: 296px;
        display: flex;
        flex-direction: row;
        margin-top: 0.3rem;
        .video-details-profile{
            .video-author-profile{
                width: 2.1rem;
                height: 2.1rem;
                border-radius: 50%;
                margin: 0 0.2rem 0 0.3rem;
                background-color: #303030;
                border: none;
            }
        }
        .video-detail{
            margin-left: 0.3rem;
            display: flex;
            flex-direction: column;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            .video-title{
                font-size: 0.8rem;
                font-weight: 600;
            }
            .video-author-name{
                font-size: 0.8rem;
                font-weight: 500;
                margin: 0.1rem 0;
                opacity: 70%;
                display: flex;
                .video-verify{
                       height: 0.7rem;
                       width: 0.6rem;
                       margin-left: 0.3rem;
                       transform: translateY(0.3rem);
                }
            }
            .video-views-time{
                display: flex;
                flex-direction: row;
                font-size: 0.8rem;
                font-weight: 500;
                opacity: 70%;
                .video-gap{
                    margin: 0 0.3rem;
                    font-size: 1.6rem;
                    transform: translateY(-1rem);
                }
            }
        }
    }

    &:hover{
        box-shadow: 0rem 0rem 8rem 5px #303030;
        cursor: pointer;
    }
`;