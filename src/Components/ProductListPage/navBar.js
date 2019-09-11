import React from "react";
import styled from "styled-components";
import { BtnOptions, BtnBack } from "../designElements/SVGelements";

const Wrapper = styled.div`
  max-width: 375px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  height: 3rem;
  padding: 1rem;
  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    max-width: 80%;
  }
`;
const NavbarItem = styled.a`
  font-size: 1.5rem;

  margin-right: 1rem;
  color: #b69f58;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    max-width: 80%;
  }
`;

const Navbar = props => {
  return (
    <Wrapper>
      {/* Intentially make it fire the price slider here  */}
      <NavbarItem onClick={props.clicked}>
        <BtnBack />
      </NavbarItem>
      <NavbarItem>HÅR</NavbarItem>
      <NavbarItem>
        <BtnOptions />
      </NavbarItem>
    </Wrapper>
  );
};

export default Navbar;
