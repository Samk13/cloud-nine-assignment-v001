import React from 'react';
import styled from 'styled-components';
import img from '../designElements/bgImage.jpg';
import {
  Stars,
  Heart,
  BtnBack,
  LocationIcon,
  TimeIcon,
  TeleIcon,
  WebIcon
} from '../designElements/SVGelements';
import { Link } from 'react-router-dom';
const ProductPage = props => {
  return (
    <Wrapper>
      <Image>
        {/* // back btn */}
        <Link to="/">
          <BtnBackStyle>
            <BtnBack />
          </BtnBackStyle>
        </Link>
        {/* Heart Icon  */}
        <HeartStyle>
          <Heart />
        </HeartStyle>

        {/* rating stars */}
        <StarsStyle>
          <Stars />
        </StarsStyle>
        
        <TitleText>Salong Namn</TitleText>
        <RatingCounter>(32)</RatingCounter>
      </Image>
        {/* Navigatiion that I didn't make here  */}
      <TabNav>
        <p>Info</p>
        <p>Schema</p>
      </TabNav>

      <TextInfo>
        <Wraper>
          <ItemsS>
            <LocationIcon />
            <p style={{ marginLeft: 20 }}>Rådmansgatan 46, 113 57 Stockholm</p>
          </ItemsS>
          <ItemsS>
            <TimeIcon />
            <p style={{ marginLeft: 20 }}>Öppet till 19:00 idag</p>
          </ItemsS>
          <ItemsS>
            <TeleIcon />
            <p style={{ marginLeft: 20 }}>08-522 389 20</p>
          </ItemsS>
          <ItemsS>
            <WebIcon />
            <p style={{ marginLeft: 20 }}>www.salongweb.se</p>
          </ItemsS>
          <ItemsS>
            <InfoText>Lorem ipsum dolor sit amet, vulputate nunc. Auctor viverra. Ridiculus feugiat nunc porttitor volut pat, acu quis torquent iaculis ultricies massa, duis nun quis que amet.
              </InfoText>
          </ItemsS>

        </Wraper>
      </TextInfo>
    </Wrapper>
  );
};

export { ProductPage };

const InfoText = styled.p`
/* Lorem ipsum dolor si */


max-width: 345px;
font-size: 15px;
line-height: 22px;
color: #2B2B2B;
`
const ItemsS = styled.div`
  display: flex;
  width: 375px;
  height: 64px;
`;

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  position: absolute;
  left: 25px;
`;

const Image = styled.div`
  position: absolute;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 375px;
  height: 267px;
  left: 0px;
  top: -17px;
  box-shadow: inset 0px -28px 63px -18px rgba(0,0,0,0.40);
`;
const HeartStyle = styled.div`
  position: absolute;
  width: 24.04px;
  height: 21px;
  left: 336px;
  top: 31px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
    fill: red;

    animation: 0.9s infinite beatHeart;
    @keyframes beatHeart {
      0% {
        transform: scale(1);
      }
      25% {
        transform: scale(1.2);
      }
      40% {
        transform: scale(1);
      }
      60% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;

const BtnBackStyle = styled.div`
  /* Path 5 */

  position: absolute;
  width: 9.14px;
  height: 18.38px;
  left: 25px;
  top: 33px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
    fill: red;

    animation: 0.9s infinite beatHeart;
    @keyframes beatHeart {
      0% {
        transform: rotate(180deg);
        transform: scale(1);
      }
      25% {
        transform: scale(1.2);
      }
      40% {
        transform: scale(1);
      }
      60% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;
const StarsStyle = styled.div`
  position: absolute;
  width: 80px;
  height: 11px;
  left: 15px;
  top: 215px;
`;
const RatingCounter = styled.p`
  position: absolute;
  height: 16px;
  left: 100px;
  top: 217px;

  font-family: MillerBanner;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;
  color: #ffffff;
`;
const TitleText = styled.h3`
  position: absolute;
  width: 125px;
  height: 26px;
  left: 25px;
  top: 179px;

  font-family: MillerBanner;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 26px;
  display: flex;
  align-items: flex-end;
  letter-spacing: -0.146667px;
  color: #ffffff;
`;
const TabNav = styled.div`
  /* Rectangle 16 Copy */
  position: absolute;
  width: 375px;
  height: 50px;
  left: 0px;
  top: 250px;

  background: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;
const TextInfo = styled.div`
  position: absolute;
  width: 375px;
  height: 348px;
  left: 0px;
  top: 321px;
  background: #ffffff;
`;

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