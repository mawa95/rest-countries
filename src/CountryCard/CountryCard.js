import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

const FlagImage = styled.img`
  width: 90vw;
  max-width: 300px;
`;

const Card = styled.li`
  background: white;
  width: 90vw;
  max-width: 300px;
  padding: 5px;
  margin: 20px;
  box-shadow: 0px 0px 5px 1px #e8e8ed;
`;
function CountryCard(props) {
  return (
        <Link to={`country/${props.name}`}>
          <Card>
            <FlagImage src={props.flag}></FlagImage>
            <div>
              <h1>{props.name}</h1>
              <p>Population: {new Intl.NumberFormat().format(props.population)}</p>
              <p>Region: {props.region}</p>
              <p>Capital: {props.capital}</p>
            </div>
          </Card>
        </Link>
  );
}

export default CountryCard;
