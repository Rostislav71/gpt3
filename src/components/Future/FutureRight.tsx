//import React from 'react'
import styled from "styled-components";
import { future } from "../../constant";
import { colors , gradients } from "../../theme";

const FutureRightContent = styled.div`
    width: 50%;
    @media (max-width: 991.98px){
        width: 50%;
    }
    @media (max-width: 767.98px){
        width: 80%;
    }
    @media (max-width: 500px){
        width:100%;
    }
`;
const FutureRightBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px 0;
`;
const FutureRightBlockItem = styled.div`
    display: flex;
    justify-content: space-between;
`;
const FutureTitle = styled.h4`
    font-weight: 800;
    font-size: calc(16px + (18 - 16) * ((100vw - 320px) / (1440 - 320)));
    line-height: 133%;
    letter-spacing: -0.04em;
    color: ${colors.white};
    width: 29%;
    position:relative;
    padding-top: 8px;
    @media (min-width: 1920px) {font-size: 18px;}
    @media (max-width: 991.98px){
        width: 40%;
    }
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 38px;
        height: 3px;
        background: ${gradients.secondaryGradient};
      }
`;
const FutureText = styled.p`
    font-weight: 500;
    font-size: 14px;
    font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (1440 - 320)));
    line-height: 171%;
    color: ${colors.blue};
    width: 55%;
    @media (min-width: 1920px) {font-size: 14px;}
    @media (max-width: 991.98px){
        width: 45%;
    }
    @media (max-width: 767.98px){
        width:50%;
    }
`;

const FutureRight = () => {
  return (
    <FutureRightContent>
        <FutureRightBlock>
            {
                future.map((item) => (
                    <FutureRightBlockItem key={item.id}>
                        <FutureTitle>{item.title}</FutureTitle>
                        <FutureText>{item.text}</FutureText>
                    </FutureRightBlockItem>
                ))
            }
        </FutureRightBlock>
    </FutureRightContent>
  )
}

export default FutureRight
