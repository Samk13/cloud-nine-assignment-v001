import React from "react";
import styled from "styled-components";
import { Stars, BtnBack } from "../designElements/SVGelements";
import { Link } from "react-router-dom";

const ProductListItem = props => {
  // Change the link's "to" to go to "/product/:index"
  // !Should not use index since it is not very safe, set id:s on the salons instead
  return (
    <Wrapper>
      {/* first number */}
      <h5>{props.data.first}</h5>

      <div>
        {/* title and location  */}
        <h4>{props.data.title}</h4>
        <Stars />
        <h6>{props.data.location}</h6>
      </div>
      <div>{/* adding space for flexbox */}</div>
      <div>
        {/* price and time */}
        <h6>{props.data.price}</h6>
        <h6>{props.data.time}</h6>
      </div>
      <Link to={`/product/${props.index}`}>
        {/* back btn */}
        <GoBtn onClick={props.openItem}>
          <BtnBack />
        </GoBtn>
      </Link>
    </Wrapper>
  );
};

export { ProductListItem };

// styles

export const Wrapper = styled.div`
  height: 109px;
  width: 375;
  max-width: 350px;
  display: flex;
  justify-content: space-around;

  align-items: center;

  padding: 1rem¨;
  border-bottom: 1px solid #d8d8d8;

  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    max-width: 80%;
  }
`;

const GoBtn = styled.div`
  transform: rotate(180deg);
  &:hover {
    opacity: 0.8;
    cursor: pointer;
    /* heat animation */
    animation: 0.9s infinite beatHeart;
    @keyframes beatHeart {
      0% {
        transform: scale(-1);
      }
      25% {
        transform: scale(-1.2);
      }
      40% {
        transform: scale(-1);
      }
      60% {
        transform: scale(-1.1);
      }
      100% {
        transform: scale(-1);
      }
    }
  }
`;
