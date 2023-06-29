import styled from "styled-components"
import { colors } from "../../theme";

const CardContent = styled.div`
    &:nth-child(1){
    }
`
const CardTop = styled.div`
    img{
        width: 100%;
        height:auto;
    }
`
const CardMiddle = styled.div`
    padding: 32px 5px 26px 25px;
    background: #042C54;
    flex: 1;
    display: flex;
    flex-direction: column;
`
const Date = styled.p`
    font-size: 11.649px;
    font-weight: 700;
    line-height: 34.947px;
    color: ${colors.white};
`;
const TitleBlog = styled.h4`
    //font-size: 19px;
    font-size: calc(16px + (19 - 16) * ((100vw - 320px) / (1440 - 320)));
    font-weight: 800;
    line-height: 30.287px;
    color: ${colors.white};
    @media (min-width: 1920px) {font-size: 19px;}
`;
const BlogLink = styled.a`
    margin-top: auto;
    font-size: 11.649px;
    font-weight: 700;
    line-height: 34.947px;
    color: ${colors.white};
`;

interface blogProps {
    img: string,
    date: string,
    title: string,
};

const BlogCardItem:React.FC<blogProps> = ({img , date , title}) => {
  return (
    <CardContent className="card-content">
        <CardTop>
            <img src={img}/>
        </CardTop>
        <CardMiddle>
            <Date>{date}</Date>
            <TitleBlog>{title}</TitleBlog>
            <BlogLink href="#">Read Full Article</BlogLink>
        </CardMiddle>
    </CardContent>
  )
}

export default BlogCardItem
