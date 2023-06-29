//import React from 'react'
import styled from "styled-components";
import { footerLinks } from "../../constant";
import { Wrapper, TitleDefault} from "../../defaultStyle";
import { colors } from "../../theme";
import Logo from "../../assets/logo.svg";

const FooterContent = styled.div`
    padding: 175px 0 27px 0;
    @media(max-width: 767.98px){
      padding: 100px 0 27px 0;
    }
`;
const FooterTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 54px 0;
`;

const FooterBtn = styled.button`
      width: 218px;
      height: 65px;
      border: 1px solid ${colors.white};
      font-family: 'Gilroy';
      font-size: 18px;
      color: ${colors.white};
      font-weight: 500;
      @media (max-width: 767.98px){
        width: 160px;
        height: 45px;
        font-size: 14px;
      }
`;
const FooterMainTitle = styled(TitleDefault)`
  width: 80%;
  line-height: 121%;
  letter-spacing: -2.48px;
  font-size: calc(40px + (62 - 40) * ((100vw - 320px) / (1440 - 320)));
  text-align: center;
  @media (min-width: 1920px) {font-size: 62px;}
  @media(max-width: 767.98px){
    width: 100%;
  }
`;
const FooterBottom = styled.div`
  width: 90%;
  margin: 0 auto;
  font-family: 'Gilroy';
  padding-top: 180px;
  @media (max-width: 767.98px){
    width: 100%;
    padding-top: 100px;
  }
  a , p{
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
  }
  a, p, h5{
    color: ${colors.white};
  }
`;
const FooterBlockItem = styled.div`
  width: 17%;
  @media(max-width: 767.98px){
    width: 30%;
  }
  @media (max-width: 375px){
    width: 45%;
  }
    h5{
      font-size: 14px;
      font-weight: 700;
      padding-bottom: 36px;
    }
    ul{
      display: flex;
      flex-direction: column;
      gap: 26px 0;
    }
`;
const FooterBlockBody = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50px 15px;
    @media (max-width: 767.98px){
       ${FooterBlockItem}:nth-child(1){
          width: 100%;
       }
    }
`;
const LogoBig = styled.img`
    padding-bottom: 25px;
`;
const Copyright = styled.p`
    text-align: center;
    padding-top: 83px;
`;


const Footer = () => {
  return (
    <footer>
      <Wrapper>
          <FooterContent>
              <FooterTop>
                  <FooterMainTitle>Do you want to step in to the future before others</FooterMainTitle>
                  <FooterBtn>Request Early Access</FooterBtn>
              </FooterTop>
              <FooterBottom>
                  <FooterBlockBody>
                      <FooterBlockItem>
                          <LogoBig src={Logo}/>
                          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                      </FooterBlockItem>
                        {
                          footerLinks.map((item) => (
                            <FooterBlockItem key={item.id}>
                                <h5>{item.title}</h5>
                                <ul>
                                  {
                                    item.links.map((link) => (
                                        <li key={link.name}>
                                          <a href={link.link}>{link.name}</a>
                                        </li>
                                    ))
                                  }
                                </ul>
                            </FooterBlockItem>
                          ))
                        }
                  </FooterBlockBody>
                  <Copyright>© 2021 GPT-3. All rights reserved.</Copyright>
              </FooterBottom>
          </FooterContent>
        </Wrapper>
    </footer>
  )
}

export default Footer
