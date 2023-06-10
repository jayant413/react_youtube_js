import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Context } from '../../App';
import useFetch from '../../hook/useFetch';
import VideoCard from './VideoCard';

import { useSelector } from "react-redux";

const Feed = () => {

  const {category , setLoading} = useContext(Context);
  const {url} = useSelector((state)=>state.data)
  const {loading} = useFetch(`v1/search/?q=${category}`)
  useEffect(()=>{
    document.title = 'YouTube'
    setLoading(loading)
  },[loading])
  
  return (
    <Content>
     {(!loading) && url?.contents?.map((item , id)=>{
        return <VideoCard data={item.video} key={id} />
      })}
    </Content>
  )
}

export default Feed



const Content = styled.div`
 ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #4e4d4d;
  border-radius: 10rem;
}
::-webkit-scrollbar-thumb:hover {
  background: #414141;
}
    width: 100%;
    height: calc(100vh - 4.3rem);
    background-color: black;
    color: white;
    display: grid;
    grid-template-columns : auto auto auto auto ;
    overflow-y: auto;
    @media screen and (max-width: 1200px) {
      grid-template-columns : auto auto auto ;
    }
    @media screen and (max-width: 860px) {
      grid-template-columns : auto auto  ;
    }
    @media screen and (max-width: 500px) {
      grid-template-columns : auto ;
      place-content: center;
    }
`;