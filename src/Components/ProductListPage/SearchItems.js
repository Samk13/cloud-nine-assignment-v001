import React from 'react';
import styled from 'styled-components';
import { BtnBack } from '../designElements/SVGelements';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


// creating conditional rendering for the price slider filter
const SearchItems = props => {
  if (props.onOff === true) {
    return (
      <Wrapper >
        <SearchText>
          <div className="slider">
            <p>
              pris {props.slData[0]}- {props.slData[1]} kr
            </p>
            <Range
              min={250}
              max={1050}
              step={100}
              defaultValue={[250, 1050]}
              allowCross={false}
              onChange={props.handleOnChange}
            />
          </div>
          <GoBtn className="btn" onClick={props.clicked}>
            <BtnBack />
          </GoBtn>
        </SearchText>
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <div className="slider">
          <SearchText>
            pris {props.slData[0]}- {props.slData[1]} kr
          </SearchText>
        </div>
        <GoBtn className="btn" onClick={props.clicked}>
          <BtnBack />
        </GoBtn>
      </Wrapper>
    );
  }
};

export { SearchItems };


// styles

const Wrapper = styled.div`
  max-width: 350px;
  z-index: 10;
  display: flex;
  font-size: 0.6rem;
  justify-content: space-between;
  align-items: center;

  height: 3rem;
 

  padding: 1rem;
  border-bottom: 1px solid #d8d8d8;
  border-top: 1px solid #d8d8d8;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  .slider {
    flex: 10;
  }
  .btn {
    flex: 1;
  }

  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    max-width: 80%;
  }
`;

const SearchText = styled.div`
  font-family: MillerBanner;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  padding: 1rem;
  flex: 6;
  /* identical to box height */

  color: #202020;
  align-items: flex-end;
`;
const GoBtn = styled.div`
  transform: rotate(-90deg);
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
