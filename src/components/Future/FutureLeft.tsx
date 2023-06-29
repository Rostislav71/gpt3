//import React from 'react'
import styled from "styled-components";
import { TitleDefault , TextOrange } from '../../defaultStyle';

const FutureLeftContent = styled.div`
  width: 39%;
  @media (max-width: 991.98px){
    width: 45%;
  }
  @media (max-width: 767.98px){
    width: 100%;
 }
`;
const FutureMainTitle = styled(TitleDefault)`
  font-size: calc(28px + (34 - 28) * ((100vw - 320px) / (1440 - 320)));
  line-height: 132%;
  padding-bottom: 34px;
  @media (min-width: 1920px) {font-size: 34px;}
`;

const FutureLeft = () => {
  return (
    <FutureLeftContent>
        <FutureMainTitle>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</FutureMainTitle>
        <TextOrange>Request Early Access to Get Started</TextOrange>
    </FutureLeftContent>
  )
}

export default FutureLeft
