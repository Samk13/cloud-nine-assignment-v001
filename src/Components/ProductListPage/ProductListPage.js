import React from 'react';
import { ProductListItem } from './ProductListItem';
import NavBar from './navBar';
import { SearchItems } from './SearchItems';

export const ProductListPage = props => {
  // mappin data in the state
  let Data = props.filter.map((d, index) => (
    <ProductListItem key={index} data={d} />
  ));
  return (
    <div className="itemsContainer">
      <NavBar clicked={props.clicked} />
      <SearchItems
        props={props}
        clicked={props.clicked}
        slData={props.slData}
        handleOnChange={props.handleOnChange}
        onOff={props.onOff}
      />
      {Data}
    </div>
  );
};

