//import React from 'react'
import styled from "styled-components";
import { Wrapper } from "../../defaultStyle";
import { TitleDefault , TextOrange } from '../../defaultStyle';
import { colors , gradients } from '../../theme';
import { possibilities } from "../../constant";

const PossibilitiesContent = styled.div`
    width: 100%;
    background: #042C54;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    padding: 57px 55px 63px 52px;
    overflow: hidden;
    @media (max-width: 767.98px){
      padding: 27px 25px 33px 22px;
    }
`;
const PossibilitiySubtitle = styled.p`
    font-weight: 500;
    font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1440 - 320)));
    line-height: 188%;
    color: ${colors.blue};
    @media (min-width: 1920px) {font-size: 16px;};
`;
const PossibilitiesBlock = styled.div`
    position: relative;
    z-index:2;
    &:nth-child(1),&:nth-child(2),&:nth-child(3){
      display: flex;
      justify-content: space-between;
      @media (max-width: 767.98px){
        flex-direction: column;
      }
    }
    &:nth-child(1){
        ${PossibilitiySubtitle}{
            width: 67%;
            padding-top: 20px;
            @media (max-width: 767.98px){
              width: 100%;
              padding-top: 0;
            }
        }
    }
    &:nth-child(2){
      padding: 91.5px 0;
      @media (max-width: 767.98px){
        gap: 10px 0;
        padding: 50px 0;
      }
    }
    &:nth-child(3){
      gap: 40px 0;
      div{
        width: 31.2%;
        @media (max-width: 767.98px){
          width: 100%;
        }
      }
      ${PossibilitiySubtitle}{
        
      }
    }
`;
const MainTitlePossibilities = styled(TitleDefault)`
  font-size: calc(28px + (34 - 28) * ((100vw - 320px) / (1440 - 320)));
  line-height: 132%;
  width:54%;
  @media (min-width: 1920px) {font-size: 34px;}
  @media (max-width: 767.98px){
    width:100%;
  }
`;
const PossibilitiyTitle = styled.h3`
      //font-size: 24px;
      font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1440 - 320)));
      line-height: 312%;
      letter-spacing: -0.04em;
      color: ${colors.white};
      position: relative;
      &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 38px;
        height: 3px;
        background: ${gradients.secondaryGradient};
      }
    @media (min-width: 1920px) {font-size: 24px;}
`;
const GradientTop = styled.div`
  position: absolute;
  width: 581px;
  height: 410px;
  left: -400px;
  background: #0F4279;
  border-radius: 50%;
  filter: blur(60px);
  top: -250px;
  z-index:1;
`;
const GradientBottom = styled.div`
  position: absolute;
  width: 623px;
  height: 558px;
  background: #1B78DE;
  filter: blur(100px);
  border-radius: 50%;
  right:-410px;
  bottom:-320px;
  z-index:1;
`;

const Possibilities = () => {
  return (
    <section className="possibilities">
      <Wrapper>
         <PossibilitiesContent>
            <PossibilitiesBlock>
              <PossibilitiyTitle>What is GPT-3</PossibilitiyTitle>
              <PossibilitiySubtitle>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His 
                    defective nor convinced residence own. Connection has put impossible own apartments 
                    boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
              </PossibilitiySubtitle>
            </PossibilitiesBlock>
            <PossibilitiesBlock>
                <MainTitlePossibilities>The possibilities are beyond your imagination</MainTitlePossibilities>
                <TextOrange>Explore The Library</TextOrange>
            </PossibilitiesBlock>
            <PossibilitiesBlock>
                {
                  possibilities.map((item) => (
                      <div key={item.id}>
                            <PossibilitiyTitle>{item.title}</PossibilitiyTitle>
                            <PossibilitiySubtitle>{item.subtitle}</PossibilitiySubtitle>
                      </div>
                  ))  
                }
            </PossibilitiesBlock>
            <GradientTop/>
            <GradientBottom/>
         </PossibilitiesContent>
      </Wrapper>
    </section>
  )
}

export default Possibilities
