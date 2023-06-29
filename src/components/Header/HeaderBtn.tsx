import styled from "styled-components";
import { colors } from '../../theme';

const HeaderBtnContent = styled.div`
  display: flex;
  gap: 0 26px;
`;
const BtnSignIn = styled.button`
  background: none;
  font-weight: 500;
  font-size: calc(16px + (18 - 16) * ((100vw - 320px) / (1440 - 320)));
  @media (min-width: 1920px) {font-size: 18px;};
  line-height: 25px;
  color: ${colors.white}
`;
const BtnSignUp = styled(BtnSignIn)`
  width: 152px;
  height: 58px;
  border-radius: 5px;
  background: ${colors.primaryOrange};
  transition: 0.5s ease;
  &:hover{
    background: none;
    border: 1px solid ${colors.white};
  }
  @media (max-width: 1086px){
    width: 122px;
    height: 45px;
  }
`;


const HeaderBtn = () => {
  return (
    <HeaderBtnContent>
        <BtnSignIn>Sign in</BtnSignIn>
        <BtnSignUp>Sign up</BtnSignUp>
    </HeaderBtnContent>
  )
}

export default HeaderBtn
