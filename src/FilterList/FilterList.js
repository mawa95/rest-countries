import React from "react";
import styled from "styled-components";

class FilterList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.filterByRegion(e.target.value);
  }
  render() {
    return (
      <select name='regions' id='regions' onChange={this.handleChange} defaultValue={this.props.filteredRegion}>
        <option value="all">All</option>
        <option value='Africa'>Africa</option>
        <option value='Americas'>Americas</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
        <option value='Polar'>Polar</option>
      </select>
    );
  }
}
export default FilterList;
