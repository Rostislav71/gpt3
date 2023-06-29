import styled from "styled-components";
import { nav } from '../../constant';
import { colors } from '../../theme';

const HeaderNavContent = styled.nav``;

const HeaderNavBody = styled.ul`
  display: flex;
  gap: 0 34px;
`;
const HeaderNavItem = styled.li`
    a{
      font-weight: 500;
      font-size: calc(16px + (18 - 16) * ((100vw - 320px) / (1440 - 320)));
      line-height: 25px;
      color: ${colors.white};
      @media (min-width: 1920px) {font-size: 18px;}
      //transition: 0.5s ease;
      position: relative;
      &:hover{
        &::after{
          content: "";
          position: absolute;
          display: block;
          width: 100%;
          height: 2px;
          background: ${colors.white};
        }
      }
      
    }
`;

const HeaderNav = () => {
  return (
    <HeaderNavContent>
          <HeaderNavBody>
             {
               nav.map((links) => (
                  <HeaderNavItem key={links.id}><a href="#">{links.link}</a></HeaderNavItem>
               ))
             }
          </HeaderNavBody>
    </HeaderNavContent>
  )
}

export default HeaderNav
