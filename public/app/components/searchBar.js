import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(){
    super()
    this.state = {
      filterTest: ''
    }
  }



  render(){
    return (
      <div className="searchBar-wrapper">
        <input 
          id="searchBar" 
          type="text"
          placeholder="Filter..." 
          value={this.state.filterTest}
          onChange={ (e) => this.setState({filterTest: e.target.value}) }
        />
      </div>
    );    
  }

}


export default SearchBar;



