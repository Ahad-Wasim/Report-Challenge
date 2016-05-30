import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  onEnteredText(e){
    this.setState({searchTerm: e.target.value})
    this.props.filterBy(e.target.value.toUpperCase());
  }


  render(){
    return (
      <div className="searchBar-wrapper">
        <input 
          id="searchBar" 
          type="text"
          placeholder="Filter..." 
          value={this.state.searchTerm}
          onChange={this.onEnteredText.bind(this)}
        />
      </div>
    );    
  }

}


export default SearchBar;



