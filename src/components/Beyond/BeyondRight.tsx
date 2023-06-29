import styled from "styled-components";
import { TitleDefault , TextOrange } from '../../defaultStyle';
import { colors } from "../../theme"; 

const BeyondRightContent = styled.div`
    width: 39%;
    padding-bottom: 34.5px;
    @media (max-width: 1250px){
        padding-bottom: 0;
    }
    @media (max-width: 1086px){
        width: 47%;
    }
    @media (max-width: 767.98px){
        width: 100%;
    }
`;
const TextBlueAqua = styled.p`
    font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1440 - 320)));
    line-height: 214%;
    font-weight: 500;
    color: ${colors.blueAqua};
    @media (min-width: 1920px) {font-size: 16px;}
`;
const BeyondTitle = styled(TitleDefault)`
    font-size: calc(28px + (34 - 28) * ((100vw - 320px) / (1440 - 320)));
    line-height: 132%;
    padding: 10px 0 23px;
    @media (min-width: 1920px) {font-size: 34px;}
    @media (max-width: 1086px){
        padding: 5px 0 10px;
    }
`;
const BeyondSubtitle = styled.p`
    font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1440 - 320)));
    line-height: 187.5%;
    font-weight: 500;
    color: ${colors.blue};
    padding-bottom: 31px;
    @media (min-width: 1920px) {font-size: 14px;}
    @media (max-width: 1086px){
        padding-bottom: 15px;
    }
`;

const BeyondRight = () => {
  return (
    <BeyondRightContent>
        <TextBlueAqua>Request Early Access to Get Started</TextBlueAqua>
        <BeyondTitle>The possibilities are beyond your imagination</BeyondTitle>
        <BeyondSubtitle>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</BeyondSubtitle>
        <TextOrange>Request Early Access to Get Started</TextOrange>
    </BeyondRightContent>
  )
}

export default BeyondRight
