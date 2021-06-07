import React from "react";
import CountryCard from "./../CountryCard/CountryCard";
import FilterList from "./../FilterList/FilterList";
import Search from "./../Search/Search";
import styled from "styled-components";

const CountryList = styled.ul`
  list-style: none;
  color: hsl(200, 15%, 8%);
  padding: 0;
  margin: 0 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: Nunito;
`;

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { region: "all", searchCountry: "" };
    this.handleFilterList = this.handleFilterList.bind(this); //this wskazuje na komponent
    this.handleSearchCountry = this.handleSearchCountry.bind(this);
  }

  handleFilterList(region) {
    //zapisanie do stanu
    this.setState({ region });
  }
  handleSearchCountry(searchCountry) {
    //zapisanie do stanu
    this.setState({ searchCountry });
    console.log(searchCountry);
  }

  render() {
    const filteredRegion = this.state.region;
    const searchCountry = this.state.searchCountry;
    //tutaj funkcje filterByRegion
    //filterAndMapCountries
    const cards = this.props.countriesData
      ? this.props.countriesData
          .filter(countryElem => {
            let isInFilteredRegion =
              countryElem.region === filteredRegion || filteredRegion === "all";
            let isInSearched =
              countryElem.name
                .toLowerCase()
                .includes(this.state.searchCountry) ||
              this.state.searchCountry === "";

            let result = isInFilteredRegion && isInSearched;
            return result;
          })
          .map(country => (
            <CountryCard
              key={country.numericCode}
              flag={country.flag}
              name={country.name}
              region={country.region}
              population={country.population}
              capital={country.capital}
            />
          ))
      : null;
    return (
      <div>
        <Search
          searchCountry={searchCountry}
          searchedCountry={this.handleSearchCountry}
        ></Search>
        <FilterList
          filterByRegion={this.handleFilterList}
          filteredRegion={filteredRegion}
        ></FilterList>

        <CountryList>{cards}</CountryList>
      </div>
    );
  }
}

export default List;
