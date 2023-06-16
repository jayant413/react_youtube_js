import React, { useState } from 'react'
import styled from 'styled-components'
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const SearchVideoCard = ({video}) => {

    const [thumbnail , setThumbnail] = useState(video?.thumbnails?.[0].url);

    const movingThumbnail = () =>{
        setThumbnail((video?.movingThumbnails?.[0].url)?video?.movingThumbnails?.[0].url:video?.thumbnails?.[0].url);
    }

    const staticThumbnail = () =>{
        setThumbnail(video?.thumbnails?.[0].url);
    }

    const navigate = useNavigate();

    const videoDetail = () =>{
      navigate(`/video/${video?.videoId}`)
  }


  return (
    <SVideoCard onMouseEnter={movingThumbnail} onMouseLeave={staticThumbnail} onClick={videoDetail}>
        <div className="s-thumbnail-area" >
        <img src={thumbnail} alt="" />
        </div>
        <div className="s-video-detail">
            <div className="s-title">{video?.title}</div>
            <div className="s-view-time">
                <span className="s-video-view">{`${abbreviateNumber(video?.stats?.views , 2)}`} views</span>
                <span className="s-video-dot">.</span>
                <span className="s-video-time">{video?.publishedTimeText}</span>
            </div>
            <div className='s-avatar-name'>
            <img src={video?.author?.avatar?.[0]?.url} alt="" className="s-author-profile" />
            <div className="s-author-name">{video?.author?.title}{video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && <BsFillCheckCircleFill className='s-video-verify'/> }</div>
            </div>
        </div>
    </SVideoCard>
  )
}

export default SearchVideoCard



const SVideoCard = styled.div`
       display: flex;
       background-color: black;
       margin: 1.2rem 0 0rem 1rem;
       border-radius: 0.5rem;
       cursor: pointer;
       @media screen and (max-width:580px){
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;

        }
       /* &:hover{box-shadow:0 0 3rem 3rem #1a1a1a;} */
       .s-thumbnail-area{
          width: 360px;
          height: 200px;
          border-radius: 0.5rem;
           .s-thumbnail{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0.5rem;
        }
        @media screen and (max-width:700px){
            width: 760px;
          height: 200px;
        }
       }
       .s-video-detail{
        color: white;
        font-family:  Times, serif;
        margin: 1rem 0.5rem 0.5rem 1rem;
        
        .s-title{
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }
        .s-view-time{
            display: flex;
            margin-bottom: 1rem ;
            opacity: 60%;
            font-weight: 300;
            .s-video-dot{
                    margin: 0 0.3rem;
                    font-size: 1.5rem;
                    transform: translateY(-0.7rem);
                }
        }
        .s-avatar-name{
            display: flex;
        .s-author-profile{
         height: 2rem;
         width: 2rem;
         border-radius: 50%;
         object-fit: cover;
         margin-right: 1rem;
        }
        .s-author-name{
            opacity: 60%;
            transform: translateY(0.5rem);
            display: flex;
            .s-video-verify{
                       height: 0.8rem;
                       width: 0.8rem;
                       margin-left: 0.5rem;
                       transform: translateY(0.4rem);

                }
        }
    }

    @media screen and (max-width:700px){
          

                .s-title{
                width: 330px;
                font-size: 0.9rem;
                margin-bottom: 0.5rem;
                font-weight: 500;
                text-align: justify;
            }
            .s-view-time{
                transform: translateX(4rem) ;
            }
            .s-avatar-name{
               transform: translateY(-2.5rem);
               margin-bottom: 10px;
               .s-author-profile{
                height: 3rem;
                width: 3rem;
                transform: translateY(-0.8rem);
               }
            }
            }
        
       }
`;