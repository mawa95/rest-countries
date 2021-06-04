import React from "react";
import styled from "styled-components";

class Search extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {value : ''}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.searchCountry);
  }
  handleChange(e) {
    this.props.searchedCountry(e.target.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Search for a country'
          value={this.props.searchCountry}
          onChange={this.handleChange}
        ></input>
      </form>
    );
  }
}
export default Search;
