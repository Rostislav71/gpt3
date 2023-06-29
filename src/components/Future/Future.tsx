//import React from 'react'
import styled from "styled-components";
import { Wrapper } from "../../defaultStyle";
import FutureLeft from "./FutureLeft";
import FutureRight from "./FutureRight";

const FutureContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 201px 0 0 0;
    position: relative;
    z-index: 2;
    @media (max-width: 767.98px){
       flex-direction: column;
       gap: 50px 0;
       padding: 101px 0 0 0;
    }
`;
const Blur02 = styled.div`
   position: absolute;
   left: -450px;
   width: 777px;
   height: 777px;
   border-radius: 50%;
   background: #07325F;
   filter: blur(282px);
   z-index: 1;
   @media(min-width: 3000px){
      display:none;
    }
    @media(max-width: 375px){
      left:-550px;
    }
`


const Future = () => {
  return (
     <section className="FeaturesOne">
        <Blur02/>
        <Wrapper>
          <FutureContent>
              <FutureLeft/>
              <FutureRight/>
          </FutureContent>
        </Wrapper>  
     </section>
  )
}

export default Future
