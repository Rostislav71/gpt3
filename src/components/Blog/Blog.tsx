//import React from 'react'
import styled from "styled-components"
import { Wrapper , TitleDefault } from "../../defaultStyle";
import BlogCardItem from "./BlogCardItem";
import { blog } from "../../constant";

const BlogContent = styled.div`
    padding: 155px 0;
    @media (max-width: 767.98px){
      padding: 100px 0;
    }
`
const BlogTitle = styled(TitleDefault)`
  font-size: calc(40px + (62 - 40) * ((100vw - 320px) / (1440 - 320)));
  line-height: 121%;
  letter-spacing: -2.48px;
  width: 53%;
  padding-bottom: 115px;
  @media (min-width: 1920px) {font-size: 62px;}
  @media (max-width: 1200px){
    width: 80%;
  }
  @media (max-width: 767.98px){
    width: 100%;
    padding-bottom: 55px;
  }
`;
const BlogCardBody = styled.div`
    display: flex;
    .block-outer:nth-child(1){
      width: 40%;
      @media (max-width: 991.98px){
        width: 100%;
      }
      .card-content{
        display: flex;
        flex-direction: column;
        width: 89.2%;
        height: 100%;
        @media (max-width: 991.98px){
          width: 100%;
        }
        h4{
          //font-size: 25px;
          font-size: calc(22px + (25 - 22) * ((100vw - 320px) / (1440 - 320)));
          @media (min-width: 1920px) {font-size: 25px;}
        }
      }
    }
    @media (max-width: 991.98px){
        flex-direction:column;
        gap: 50px 0;
    }
    .block-outer:nth-child(2){
      width: 60%;
      //border: 1px solid red;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 48px 0;
      @media (max-width: 991.98px){
        width: 100%;
      }
      .card-content{
        width: 46.6%;
        @media (max-width: 500px){
          width: 100%;
        }
        a{
          padding-top: 12px;
        }
      }
    }
`;

const Blog = () => {
  return (
    <section className="blog">
      <Wrapper>
        <BlogContent>
            <div>
              <BlogTitle>A lot is happening, We are blogging about it.</BlogTitle>
            </div>
            <BlogCardBody>
                <div className="block-outer">
                    {
                      blog.slice(0,1).map((item) => (
                        <BlogCardItem
                          key={item.id}
                          img={item.img} 
                          date={item.date} 
                          title={item.title}
                        />
                      ))
                    }
                </div>
                <div className="block-outer">
                    {
                      blog.slice(1).map((item) => (
                        <BlogCardItem 
                          key={item.id}
                          img={item.img} 
                          date={item.date} 
                          title={item.title} 
                        />
                      ))
                    }
                </div>
            </BlogCardBody>
        </BlogContent>
      </Wrapper>
    </section>
  )
}

export default Blog
