import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProductListPage } from '../Components/ProductListPage/ProductListPage';
import { ProductPage } from '../Components/productPage/ProductPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [
        {
          first: '12:00',
          title: 'Sax&Fön',
          stars: 4,
          rating: 32,
          location: 'Rådmansgatan 46',
          price: 320,
          time: '20 min'
        },
        {
          first: '14:00',
          title: 'Sam&InteFön',
          stars: 4,
          rating: 36,
          location: 'Hötorget 12',
          price: 500,
          time: '90 min'
        },
        {
          first: '16:00',
          title: 'Saxofon&Bön',
          stars: 4,
          rating: 60,
          location: 'Gallerian 46',
          price: 700,
          time: '50 min'
        },
        {
          first: '17:00',
          title: 'Akta &huvudet',
          stars: '4',
          rating: '50',
          location: 'Olof Palmes gata 13',
          price: 1000,
          time: '60 min'
        }
      ],
      volume: [250, 1050],
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handelInput = this.handelInput.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handelInput = e => {
    this.setState({ search: e.target.value });
  };

  handleOnChange = value => {
    this.setState({
      volume: value
    });
  };

  handleClick = e => {
    this.setState({ clicked: !this.state.clicked });
    //  console.log(this.state.clicked);
  };

  render() {
    // filter logic
    let filterSearch = this.state.Data.filter(P => {
      return P.price > this.state.volume[0] && P.price < this.state.volume[1];
    });

    return (
      <Router>
        <Switch>
          <Wrapper>
            <Route
              path="/"
              exact
              render={props => (
                <ProductListPage
                  clicked={this.handleClick}
                  onOff={this.state.clicked}
                  data={this.state.Data}
                  filter={filterSearch}
                  slData={this.state.volume}
                  handleOnChange={this.handleOnChange}
                />
              )}
            />
            <Route path="/product" exact render={props => <ProductPage />} />
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
