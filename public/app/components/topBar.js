import React from 'react';
import SearchBar from './searchBar.js';

const TopBar = (props) => {
  return (
    <section className="top-wrapper">
      <SearchBar filterBy={props.filterBy} />
    </section>
  );
};


export default TopBar;

  
