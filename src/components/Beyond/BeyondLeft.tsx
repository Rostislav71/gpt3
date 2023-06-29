import styled from "styled-components";
import BeyondImg from "../../assets/Feature Image.svg";

const BeyondLeftContent = styled.div`
    width: 46.27%;
    @media (max-width: 1086px){
        width: 50%;
    }
    @media (max-width: 767.98px){
        display:flex;
        justify-content: center;
        width: 100%;
    }
    img{
        width: 100%;
        height: auto;
        @media (max-width: 767.98px){
            width: 90%;
        }
        @media (max-width: 375px){
            width: 100%;
        }
    }
`;

const BeyondLeft = () => {
  return (
    <BeyondLeftContent>
        <img src={BeyondImg} alt="BeyondImg"/>
    </BeyondLeftContent>
  )
}

export default BeyondLeft
