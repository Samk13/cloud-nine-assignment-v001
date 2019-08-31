import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProductListPage } from '../Components/ProductListPage/ProductListPage';
import { ProductPage } from '../Components/productPage/ProductPage';
const Wrapper = styled.div`
  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    max-width: 80%;
    margin-left: 20%;
  }
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleClick = e => {
    this.setState({ clicked: !this.state.clicked });
    console.log(`clicked !`);
    console.log(this.state);
  };

  handleOpen = e => {
    console.log(`OpenPageFunctionClicked`);
  };

  render() {
    return (
      <Router>
        <Switch>
          <Wrapper>
            <Route
              path="/"
              exact
              render={props => (
                <ProductListPage {...props} clicked={this.handleClick} />
              )}
            />
            <Route
              path="/product"
              exact
              render={props => (
                <ProductPage {...props} openItem={()=>this.handleOpen()} />
              )}
            />
          </Wrapper>
        </Switch>
      </Router>
    );
  }
}
