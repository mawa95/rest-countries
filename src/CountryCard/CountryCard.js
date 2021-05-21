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
    <>
      <Router>
        <Link to="/country">
          <Card>
            <FlagImage src={props.flag}></FlagImage>
            <div>
              <h1>{props.name}</h1>
              <p>Population: {props.population}</p>
              <p>Region: {props.region}</p>
              <p>Capital: {props.capital}</p>
            </div>
          </Card>
        </Link>
        <Switch>
        <Route path="/country">
          <h2>nowa karta kraju</h2>
        </Route>
        </Switch>
      </Router>
     
    </>
  );
}

export default CountryCard;
