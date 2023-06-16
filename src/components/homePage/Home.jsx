import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import { Context } from '../../App'
import LeftBar from '../commonComponents/LeftBar'
import Feed from './Feed'
import LeftSmallBar from '../commonComponents/LeftSmallBar';


const Home = () => {
  const {menu , setMenu ,loading} = useContext(Context);
  useEffect(()=>{
    setMenu(true);
  },[loading])
  return (
    <HomePage>
     

      <div className="flex md:hidden">
      {!menu && <LeftBar />}
      </div>
      <div className="hidden md:flex">
      {menu && <LeftBar />}
      </div>
       
      {!menu && <div className='hidden sm:flex'><LeftSmallBar /></div>}
      <Feed/>
    </HomePage>
  )
}

export default Home


const HomePage = styled.div`

  display: flex;
  flex-direction: row;
`;