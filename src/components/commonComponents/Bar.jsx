import {Context} from '../../App'
import React, { useContext } from 'react'
import styled from 'styled-components'

const Bar = () => {
  const {loading} = useContext(Context);
  return (
    <BarDesign>
      <div className={`bar-animation ${loading?"show-bar" :""}`}></div>
      </BarDesign>
  )
}

export default Bar
 

const BarDesign = styled.div`
position: absolute;
height: 0.2rem;
width: 100vw;
z-index: 20;
display: grid;
background-image : linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%);
place-content: center;
overflow-x: hidden;
.bar-animation{
  height: 0.2rem;
  width: 95vw;
  /* background-image : linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%); */
  animation: bar 1.5s ease-in-out infinite alternate-reverse;
  visibility: hidden;
  &.show-bar{
    visibility: visible;
  }
}

@keyframes bar {
  0%{
    width: 5vw; background-color: red; visibility: visible;
  }
  20%{
    width: 25vw; background-color: green; visibility: visible;
  }
  40%{
    width: 45vw; background-color: blue; visibility: visible;
  }
  60%{
    width: 65vw; background-color: orange; visibility: visible;
  }
  80%{
    width: 85vw; background-color: skyblue; visibility: visible;
  }
  100%{
    width: 90vw; background-color: red; visibility: visible;
  }
}
`;