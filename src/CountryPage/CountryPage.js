import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import styled from "styled-components";
const FlagImage = styled.img`
  width: 90vw;
  max-width: 300px;
`;
class CountryPage extends React.Component {
  constructor(props){
      super(props);
      this.state = {}
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    console.log(this.props.countriesData)
    const { match, location, history } = this.props;
    const data = this.props.countriesData.find(item => {
      console.log(item, match)
      return item.name === match.params.name;
    });
   
    let mappedBorders = data.borders.map(border => {
      return this.props.countriesData.find(item => {
        return item.alpha3Code === border;
      });
    });
    const result = { ...data, borders: mappedBorders };

    return (
      <>
        <button onClick={() => history.goBack()}>back</button>

        <div key={result.alpha3Code}>
          <FlagImage src={result.flag}></FlagImage>
          <h1>{result.name}</h1>
          <p>Native Name: {result.nativeName}</p>
          <p>Population: {new Intl.NumberFormat().format(result.population)}</p>
          <p>Region: {result.region}</p>
          <p>Sub region: {result.subregion}</p>
          <p>Capital: {result.capital}</p>
          <p>Top level domain: {result.topLevelDomain}</p>
          <p>Currencies: {result.currencies[0].code}</p>
          <p>
            Borders:
            {result.borders.map(border => (
              <button key={border.alpha3Code}>{border.name}</button>
            ))}
          </p>
        </div>
      </>
    );
  }
}
const ShowTheLocationWithRouter = withRouter(CountryPage);
export default ShowTheLocationWithRouter;
