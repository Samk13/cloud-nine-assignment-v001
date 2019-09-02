import React from "react";
import { Tabs } from "@yazanaabed/react-tabs";
import styled from 'styled-components';

import {
  // Stars,
  // Heart,
  // BtnBack,
  LocationIcon,
  TimeIcon,
  TeleIcon,
  WebIcon
} from '../../designElements/SVGelements';


 export  const App = () => (
  <div style={styles}>
    <Tabs
      activeTab={{
        id: "tab1"
      }}
    >
      <Tabs.Tab id="tab1" title="Info">
        <div style={{ padding: 10 }}>
        <TextInfo>
        <Wraper>
          <ItemsS>
            <LocationIcon />
            <p style={{ marginLeft: 20 }}>
            Rådmansgatan 46, 113 57 Stockholm</p>
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
  
    
        </div>
      </Tabs.Tab>
      <Tabs.Tab id="tab2" title="Schema">
        <div style={{ padding: 10 }}>
        <p style={{ padding: 20 }}>
        Lorem ipsum dolor sit amet, vulputate nunc. Auctor viverra. Ridiculus feugiat nunc porttitor volut pat, acu quis torquent iaculis ultricies massa, duis nun quis que amet
        Lorem ipsum dolor sit amet, vulputate nunc. Auctor viverra. Ridiculus feugiat nunc porttitor volut pat, acu quis torquent iaculis ultricies massa, duis nun quis que amet
        Lorem ipsum dolor sit amet, vulputate nunc. Auctor viverra. Ridiculus feugiat nunc porttitor volut pat, acu quis torquent iaculis ultricies massa, duis nun quis que amet
                </p>
        </div>
      </Tabs.Tab>
    </Tabs>
  </div>
);



// styled components 


const styles = {
  position:"absolute",
  top:245,
  width:400,
  fontFamily: "MillerBanner",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "17px",
  lineHeight: "26px",
  textAlign: "center",
};
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
`


const TextInfo = styled.div`
  position: absolute;
  width: 375px;
  height: 348px;
  left: 0px;
  margin:2rem;
  /* top: 321px; */
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