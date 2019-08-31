import React from "react";
import styled from "styled-components";
import { BtnBack } from '../designElements/SVGelements';



const Wrapper = styled.div`
  max-width:350px;
  display: flex;
  font-size: 0.6rem;
  justify-content: space-between;
  align-items: center;  
  z-index:10;
  height: 3rem;
  padding: 1rem;
  border-bottom: 1px solid #D8D8D8;
  border-top: 1px solid #D8D8D8;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  @media only screen and (min-width: 768px) {
  /* For everything bigger than 768px */
  max-width:80%;
  }
`;

const SearchText = styled.a`

font-family: MillerBanner;
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 18px;
padding: 1rem;
/* identical to box height */

color: #202020;
align-items: flex-end;

`
const GoBtn = styled.div`
  transform: rotate(-90deg);
  &:hover {
    opacity: 0.8;
    cursor: pointer;
   
  }
`;

const  SearchItems = props => {

  return(
    <Wrapper>
    <SearchText>Pris 250 - 500 kr</SearchText>
    <GoBtn>
      <BtnBack />
    </GoBtn>
    
    </Wrapper>
  )
}

export { SearchItems }


