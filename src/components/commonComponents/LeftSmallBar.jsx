import React, { useContext } from 'react'
import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'
import {MdSlowMotionVideo,MdSubscriptions,MdOutlineVideoLibrary} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../App'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';



const LeftSmallBar = () => {
  const leftSmallMenuItem = [
    { name : 'New' ,icon:<AiFillHome/>, type: 'category' },
    { name : 'Shorts' ,icon:<MdSlowMotionVideo/>, type: 'category' },
    { name : 'Subscriptions' ,icon:<SubscriptionsIcon/>, type: 'category' },
    { name : 'Library' ,icon:<MdOutlineVideoLibrary/>, type: 'list' },
  ]
  const {category, setCategory} = useContext(Context);
  const navigate = useNavigate();

  const selectCategory = (selectedCategory) =>{
       setCategory(selectedCategory);
       navigate("/")
  }

  return (
    <SmallBar>
        {leftSmallMenuItem.map((item,id)=>{
          return (
            <button className={`lb-s-menu-item-btn ${(category=== item.name) ? 'categorySelected' : ''}`} 
            onClick={()=>{item.type === 'category'? selectCategory(item.name):''}} 
            key={id}>
              <span className="lb-s-menu-item-icon">{item.icon}</span>
              <span className="lb-s-menu-item-name">{item.name ==="New"?"Home" : item.name}</span>
            </button>
          )
        })}
    </SmallBar>
  )
}

export default LeftSmallBar;


const SmallBar = styled.div`
    background-color: #171616;
    width: 7rem;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 4.3rem);
    color: white;
    overflow-y: auto;
    padding-top: 2rem;
    @media (max-width: 800px) {
        width: 6rem;
    }
    .lb-s-menu-item-btn{
      margin-left: auto;
      border: none;
      margin-right: auto;
      display: grid;
      place-content: center;
      margin: 0.5rem auto 0.5rem auto;
      border-radius: 0.4rem;
      height: 5rem;
      width: 4.5rem;
      background-color: transparent;
      color: white;
      &.categorySelected{
          background-color: #303030;
        }
      .lb-s-menu-item-icon{
        font-size: 1.3rem;
      }
      .lb-s-menu-item-name{
        font-size: 0.6rem;
        margin: 0.5rem auto 0.5rem auto;
      }
      &:hover{background-color: #303030;}
    }
`;