import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductListPage } from "../Components/ProductListPage/ProductListPage";
import { ProductPage } from "../Components/productPage/ProductPage";

export default class App extends React.Component {
  // Move state to ProductListPage since its the only component using it
  // and making the app.js only handle routing

  // Add :id to route to get the id to the salon from the url

  render() {
    return (
      <Router>
        <Switch>
          <Wrapper>
            <Route path="/" exact component={ProductListPage} />
            <Route path="/product/:index" component={ProductPage} />
          </Wrapper>
        </Switch>
      </Router>
    );
  }
}

const Wrapper = styled.div`
  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    max-width: 80%;
    margin-left: 20%;
  }
`;
