//import React from 'react'
import styled from "styled-components";
import { Wrapper } from "../../defaultStyle";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const HeroContent = styled.div`
  display: flex;
  position: relative;
  z-index:2;
  @media (min-width: 1440px){
    max-width: 1440px;
    margin: 0 auto;
  }
  @media (max-width: 991.98px){
    flex-direction: column;
    gap: 50px 0;
  }
`;
const Blur01 = styled.div`
  top:-350px;
  left:-350px;
  position: absolute;
  width: 1013px;
  height: 1013px;
  border-radius: 1013px;
  background: #002853;
  filter: blur(282px);
  z-index:1;
  @media(min-width: 3000px){
    display:none;
  }
  @media(max-width: 767.98px){
    left:-700px;
  }
  @media(max-width: 375px){
    left:-800px;
  }
`;

const Hero = () => {
  return (
    <section className="hero">
      <Blur01/>
      <HeroContent>
        <Wrapper>
            <HeroLeft/> 
        </Wrapper>
        <HeroRight/>
      </HeroContent>
    </section>
  )
}

export default Hero
