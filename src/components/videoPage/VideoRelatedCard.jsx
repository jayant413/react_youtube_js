import React from 'react'
import { useNavigate } from 'react-router-dom';
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import styled from 'styled-components';

const VideoRelatedCard = ({video}) => {
  const navigate = useNavigate()
  return (
    <VRC onClick={()=>{navigate(`/video/${video?.videoId}`)}}>
       <div className="vrc-thumbnail">
           <img src={video?.thumbnails?.[0]?.url} alt="" />
       </div>
       <div className="vrc-details">
           <span className="vrc-title">{video?.title.slice(0,70)}</span>
           <span className="vrc-author-name">{video?.author?.title}{video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && <BsFillCheckCircleFill className='vrc-video-verify'/> }</span>
           <div className="vrc-stats">
            <span className="vrc-stats-views">{`${abbreviateNumber(video?.stats?.views , 2)}`} views</span>
            <span className="vrc-stats-dot">.</span>
            <span className="vrc-stats-time">{video?.publishedTimeText}</span>
           </div>
       </div>
    </VRC>
  )
}

export default VideoRelatedCard



const VRC = styled.div`
     display: flex;
     width: 100%;
     background-color: black;
     border-radius: 0.5rem;
     margin: 0.7rem 0;
     .vrc-thumbnail{
      width: 50%;
      height: 9rem;
      border-radius: 0.5rem;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .vrc-details{
      display: flex;
      flex-direction: column;
      margin: 0.5rem 0.3rem 0.5rem 0.6rem;
      width: 50%;
      .vrc-title{
        font-size: 1rem;
        font-weight: 600;
        margin: 0.4rem 0;
      }
      .vrc-author-name{
        font-size: 0.8rem;
        opacity: 70%;
        display: flex;
        .vrc-video-verify{
          height: 0.7rem;
          width: 0.7rem;
          transform: translateY(0.3rem);
          margin: 0 0.3rem;
        }
      }
      .vrc-stats{
        display: flex;
        font-size: 0.8rem;
        opacity: 70%;
        .vrc-stats-dot{
          margin: 0 0.3rem;
          font-size: 2rem;
          transform: translateY(-1.5rem);
        }
      }
    }
`;