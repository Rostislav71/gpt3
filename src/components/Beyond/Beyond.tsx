//import React from 'react'
import styled from "styled-components";
import { Wrapper } from "../../defaultStyle";
import BeyondLeft from "./BeyondLeft";
import BeyondRight from "./BeyondRight";

const BeyondContent = styled.div`
  padding: 45px 0 158px 0;
  display: flex;
  align-items: flex-end;
  gap: 50px 15px;
  position: relative;
  z-index:2;
  @media (max-width: 767.98px){
    flex-direction: column-reverse;
  }
`;

const Beyond = () => {
  return (
    <section className="beyond">
        <Wrapper>
            <BeyondContent>
                <BeyondLeft/>
                <BeyondRight/>
            </BeyondContent>        
        </Wrapper>
    </section>
  )
}

export default Beyond
