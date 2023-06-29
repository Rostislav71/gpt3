//import React from 'react'
import styled from "styled-components";
import { Wrapper } from "../../defaultStyle";
import {colors , gradients} from "../../theme"

const CTAContent = styled.div`
    padding: 46px;
    border-radius: 10.724px;
    background: ${gradients.primaryGradient};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px 20px;
    @media (max-width: 767.98px){
      flex-direction: column;
      //align-items: flex-;
      padding: 26px;

    }
`;
const CTAText = styled.div`
  @media (max-width: 767.98px){
    text-align: center;
  }
`;
const CTALittleTitle = styled.h4`
    font-weight: 500;
    line-height: 30px;
    font-size: 12px;
    color: ${colors.primaryblack};
`;
const CTAMainTitle = styled.h3`
  font-weight: 800;
  font-size: calc(20px + (24 - 20) * ((100vw - 320px) / (1440 - 320)));
  line-height: 187.5%;
  color: ${colors.secondaryblack};
  @media (min-width: 1920px) {font-size: 24px;}
  @media (max-width: 767.98px){
    line-height: 140%;
  }
`
const CTABtn = styled.div`

`;
const BtnBlack = styled.button`
  border-radius: 40px;
  background: ${colors.primaryblack};
  width: 189px;
  height: 59px;
  font-size: 18px;
  color: ${colors.white};
  font-weight: 700;
  transition: 0.5s ease;
    &:hover{
      background: ${colors.white};
      color: ${colors.primaryblack};
    }
  @media (max-width: 991.98px){
    width: 149px;
    height: 49px;
    font-size: 15px;
  }
`


const CTA = () => {
  return (
    <section className="cta">
      <Wrapper>
        <CTAContent>
          <CTAText>
              <CTALittleTitle>Request Early Access to Get Started</CTALittleTitle>
              <CTAMainTitle>Register today & start exploring the endless possiblities.</CTAMainTitle>
          </CTAText>
          <CTABtn>
            <BtnBlack>Get Started</BtnBlack>
          </CTABtn>
        </CTAContent>   
      </Wrapper> 
    </section>
  )
}

export default CTA
