import React, { Component } from "react";
import { ProductListItem } from "./ProductListItem";
import NavBar from "./navBar";
import { SearchItems } from "./SearchItems";
const salonsData = require("../../Data/Salons.json");

export class ProductListPage extends Component {
  constructor(props) {
    super(props);

    // Import data from json-file to state in this component
    this.state = {
      salons: salonsData,
      volume: [250, 1050],
      clicked: false
    };
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
    const { clicked, salons, volume } = this.state;

    // Move the filtering of salonslist to this render function
    const salonsList = salons.map((P, index) => {
      if (P.price > this.state.volume[0] && P.price < this.state.volume[1]) {
        return <ProductListItem key={index} data={P} index={index} />;
      }
      return false;
    });

    return (
      <div className="itemsContainer">
        <NavBar clicked={this.handleClick} />
        <SearchItems
          clicked={this.handleClick}
          slData={volume}
          handleOnChange={this.handleOnChange}
          onOff={clicked}
        />
        {salonsList}
      </div>
    );
  }
}
