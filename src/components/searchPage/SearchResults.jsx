import React, { useContext, useEffect } from 'react'
import { Context } from '../../App'
import LeftBar from '../commonComponents/LeftBar';
import styled from 'styled-components';
import SearchVideoCard from './SearchVideoCard';
import {  useParams } from 'react-router-dom';
import useFetch from '../../hook/useFetch';
import { useSelector } from 'react-redux';
import LeftSmallBar from '../commonComponents/LeftSmallBar';

const SearchResults = () => {
  const {menu, setMenu , setLoading , setCategory} = useContext(Context);
  const {query} = useParams();
  const {loading} = useFetch(`v1/search/?q=${query}`)
  const {url} = useSelector((state)=>state.data)
  useEffect(()=>{
    document.title = `${query} - YouTube`;
    setLoading(loading)
    setCategory('')
    setMenu(true)
  },[loading])


  return (
    <SearchVedios>
      <div className="left-bar">{menu && <LeftBar/>}{!menu && <LeftSmallBar/>}</div>
      
      <div className="search-results">
        {!loading && url?.contents?.map((item , id)=>{
          return (
            <SearchVideoCard video={item.video} key={id} />
          )
        })}
      </div>
    </SearchVedios>
  )
}

export default SearchResults


const SearchVedios = styled.div`
    background-color: black;
    display: flex;
    height: calc(100vh - 4.3rem);
    width: 100%;
    
    .search-results{
      padding-left: 1rem ;
      height: 100%;
      width: 100%;
      overflow-y: auto;
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
    }
`;