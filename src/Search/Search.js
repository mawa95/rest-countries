import React from "react";
import styled from "styled-components";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleSubmit = this.handleSubmit.bind(this); 
  }
  handleSubmit = e => {
    console.log('submit')
  }

  render() {
    return (
      <form>
        <input type='text' placeholder='Search for a country'></input>
      </form>
    );
  }
}
export default Search;
