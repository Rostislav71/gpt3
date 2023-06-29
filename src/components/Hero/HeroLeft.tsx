import { FormEvent, ChangeEvent, useState } from 'react';
import styled from "styled-components";
import { TitleDefault } from '../../defaultStyle';
import { colors } from '../../theme';
import People from '../../assets/people.svg'

const HeroLeftContent = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 36px 0;
    padding-top: 103px;
    @media (max-width: 991.98px){
        width: 100%;
        padding-top: 50px;
    }
`;
const MainTitle = styled(TitleDefault)`
    font-size: calc(50px + (62 - 50) * ((100vw - 320px) / (1120)));
    line-height: 120%;
    @media (min-width: 1920px) {font-size: 62px;}
`;
const SubtitleHero = styled.p`
    width: 75%;
    font-weight: 400;
    font-size: calc(15px + (20 - 15) * ((100vw - 320px) / (1440 - 320)));
    line-height: 135%;
    color: ${colors.blue};
    @media (min-width: 1920px) {font-size: 20px;}
    @media (max-width: 991.98px){
        width: 100%;
    }
`;

const Form = styled.form`
    height: 73px;
    display:flex;
    gap:10px 0;
    @media (max-width: 1087px){
        height: 53px;
    }
    @media (max-width: 500px){
        height: 43px;
        width: 100%;
    }
`;

const InputEmail = styled.input`
    background: ${colors.primaryblueDark};
    padding: 0 32px 0 32px; 
    width: 64.4%;
    height: 100%;
    font-weight: 400;
    font-size: 20px;
    border-radius: 5px 0px 0px 5px;
    color: ${colors.secondaryBlueDark};
    &::placeholder{
        color: ${colors.secondaryBlueDark};
    }
    @media (max-width: 1087px){
        font-size: 15px;
        padding: 0 16px 0 16px; 
    }
    @media (max-width: 991.98px){
        width: 45%;
    }
    @media (max-width: 767.98px){
        width: 60%;
    }
    @media (max-width: 500px){
        font-size: 14px;
        width: 70%;
    }
`;

const InputSubmit = styled.input`
    background: ${colors.primaryOrange};
    border-radius: 0 5px 5px 0;
    width: 174px;
    height: 100%;
    font-weight: 700;
    font-size: 20px;
    //line-height: 27px;
    cursor: pointer;
    color: ${colors.white};
    transition: 0.5s ease;
    &:hover{
      background: ${colors.secondaryBlueDark};
      //border: 2px solid ${colors.secondaryBlueDark};
    }
    @media (max-width: 1087px){
        font-size: 15px;
        width: 154px;
    }
    @media (max-width: 500px){
        width: 114px;
        font-size: 13px;
    }
`

const PeopleBody = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0 13.5px;
`;
const PeopleImg = styled.img`

`;
const PeopleText = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 38px;
    color: ${colors.white};
`;

const HeroLeft = () => {
    const [email, setEmail] = useState('');

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
    }
    function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
        const emailValue = e.target.value;
        setEmail(emailValue);
        console.log(email);
    }
  return (
    <HeroLeftContent>
        <MainTitle>Let’s Build Something amazing with GPT-3 OpenAI</MainTitle>
        <SubtitleHero>Yet bed any for travelling assistance indulgence unpleasing. 
            Not thoughts all exercise blessing. Indulgence way 
            everything joy alteration boisterous the attachment. Party 
            we years to order allow asked of.
        </SubtitleHero>
        <Form onSubmit={handleSubmit}>
            <InputEmail 
                value={email} 
                onChange={handleEmailChange}  
                type='email' name='email' 
                placeholder='Your Email Address'
                autoComplete='off'
            />
            <InputSubmit 
                type='submit' 
                name='submit' 
                value='Get Started'
            />
        </Form>
        <PeopleBody>
            <PeopleImg src={People} alt="people" />
            <PeopleText>1,600 people requested access a visit in last 24 hours</PeopleText>  
        </PeopleBody>
    </HeroLeftContent>
  )
}

export default HeroLeft
