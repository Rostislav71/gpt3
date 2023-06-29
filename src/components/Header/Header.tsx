import React from 'react'
import styled from "styled-components";
import { Wrapper } from "../../defaultStyle";
import HeaderNav from "./HeaderNav";
import HeaderBtn from "./HeaderBtn";
import HeaderBurger from "./HeaderBurger";
import Logo from "../../assets/logo.svg"

const HeaderContent = styled.div`
  padding-top: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index:3;
`
const HeaderLogo = styled.div`
  img{
    width: 62.56px;
    height: 16.02px;
  }
`;

const HeaderNavBtn = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    gap: 0 40px;
    align-items: center;
    @media (max-width: 991.98px){
      transition: 0.5s ease;
      position: fixed;
      width: auto;
      top: 100px;
      z-index:2;
      background: #031B34;
      //width: 400px;
      padding: 20px;
      border-radius: 15px;
      flex-direction: column;
      align-items: center;
      gap: 25px 0;
      right: -300px;
      ul{
        flex-direction: column;
        align-items: center;
        gap: 15px 0;
      }
      &.active{
        right: 15px;
      }
    }
`;

const Header = () => {
  const body =  document.body;
  const [menu , setMenu] = React.useState(false);

  function toggleMenu() {
      setMenu(!menu);
  }
  React.useEffect(() => {
    if (menu) {
      body.style.overflowY = 'hidden';
    } else {
      body.style.overflowY = 'auto';
    }
  }, [menu]);
  return (
      <header className="header">
          <Wrapper>
              <HeaderContent>
                  <HeaderLogo><img src={Logo} alt="logo"/></HeaderLogo>
                  <HeaderNavBtn onClick={() => setMenu(!menu)} className={menu ? "active" : ""}>
                      <HeaderNav/>
                      <HeaderBtn/>
                  </HeaderNavBtn>
                  <HeaderBurger menu={menu} toggleMenu={toggleMenu}/>
              </HeaderContent>
          </Wrapper>
      </header>
  )
}

export default Header
