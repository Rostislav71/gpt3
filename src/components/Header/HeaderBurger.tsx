import React from 'react'
import styled from "styled-components";

const BurgerBtn = styled.button`
    width: 35px;
    height: 25px;
    position: relative;
    display: none;
    @media (max-width: 991.98px){
      display: block;
    }
    &{
      span , &::before, &::after{
        transition: 0.5s ease;
        position: absolute;
        height: 15%;
        background: white;
      }
      span{
        right:0;
        width: 70%;
        top: 50%;
        transform: scale(1) translate(0px, -50%)
      }
      &::before, &::after{
        width: 100%;
        content: "";
        display: block;
      }
      &::before{
        top:0;
      }
      &::after{
        bottom:0;
      }
    }
    &.active{
      span{
        transform: scale(0) translate(0px, -50%)
      }
      &::before{
        top: 50%;
        transform: rotate(-45deg) translate(0px, -50%);
      }
      &::after{
        bottom: 50%;
        transform: rotate(45deg) translate(0px, 50%);
      }
    }
`
interface menuProps {
  menu: boolean,
  toggleMenu: Function,
}

const HeaderBurger:React.FC<menuProps> = ({menu , toggleMenu}) => {
  return (
    <>
      <BurgerBtn onClick={() => toggleMenu()} className={menu ? "active" : ""}><span></span></BurgerBtn>
    </>
  )
}

export default HeaderBurger
