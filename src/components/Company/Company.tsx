//import React from 'react'
import styled from "styled-components";
import { Wrapper } from "../../defaultStyle";
import { company } from "../../constant";

const CompanyContent = styled.div`
    padding: 122px 0 135px;
    @media(max-width: 767.98px){
      padding: 72px 0 85px;
    }
`;
const CompanyListBody = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 23px 46.5px;
`;

const CompanyListItem = styled.li``;


const Company = () => {
  return (
    <section className="company">
        <Wrapper>
           <CompanyContent>
              <CompanyListBody>
                  {
                    company.map((item) => (
                        <CompanyListItem key={item.id}>
                            <img src={item.img}></img>
                        </CompanyListItem>
                    ))
                  }
              </CompanyListBody>
           </CompanyContent>
        </Wrapper>
    </section>
  )
}

export default Company
