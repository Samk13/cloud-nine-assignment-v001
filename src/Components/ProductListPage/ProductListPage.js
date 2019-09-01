import React from 'react';
import { ProductListItem } from './ProductListItem';
import NavBar from './navBar';
import { SearchItems } from './SearchItems';

// maping the Data from a const Data that we can replace with JSON afyer 🛰

export const ProductListPage = props => {
  let Data = props.filter.map((d, index) => (
    
      <ProductListItem key={index} data={d} />
    
  ));
  return (
    <div className="itemsContainer">
      <NavBar clicked={props.clicked} />
      <SearchItems props={props}
       slData={props.slData}
       handleOnChange={props.handleOnChange} 
       />
      {/* {Data.map((x, index) => <ProductListItem {...x} key ={index} openItem= {props.openItem}/>)} */}
      {Data}
    </div>
  );
};

export const Data = [
  {
    first: '12:00',
    title: 'Sax&Fön',
    stars: '4',
    location: 'Rådmansgatan 46',
    price: '320 kr',
    time: '20 min'
  },
  {
    first: '14:00',
    title: 'Sam&InteFön',
    stars: '4',
    location: 'Hötorget 12',
    price: '500 kr',
    time: '90 min'
  },
  {
    first: '16:00',
    title: 'Saxofon&Bön',
    stars: '4',
    location: 'Gallerian 46',
    price: '1000 kr',
    time: '50 min'
  },
  {
    first: '17:00',
    title: 'Akta &huvudet',
    stars: '4',
    location: 'Olof Palmes gata 13',
    price: '3000 kr',
    time: '60 min'
  }
];
