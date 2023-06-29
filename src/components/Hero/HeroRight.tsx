import styled from "styled-components";
import Ai from "../../assets/HeroIllusration.svg"

const HeroRightContent = styled.div`
    position: absolute;
    //margin-right: -100px;
    right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (min-width: 1440px){
      //position: static;
    }
    @media (max-width: 1269px){
      height: 100%;
    }
    @media (max-width: 991.98px){
      position: static;
      justify-content: center;
    }
`;

const HeroImg = styled.img`
    width: 100%;
    height: auto;
    @media (max-width: 1269px){
      width: 80%;
    }
    @media (max-width: 991.98px){
      width: 100%;
    }
`;


const HeroRight = () => {
  return (
    <HeroRightContent>
        <HeroImg src={Ai}/>
    </HeroRightContent>
  )
}

export default HeroRight
