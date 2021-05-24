import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import List from "./List/List";

const CountryInfoWrapper = styled.section`
  background: hsl(0, 0%, 98%);
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      countries: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    const apiUrl = "https://restcountries.eu/rest/v2/all";
    fetch(apiUrl)
      .then(response => response.json())

      .then(data =>
        this.setState({
          loading: false,
          countries: data
        })
      );
  }

  render() {
    const { loading, countries } = this.state;

    if (loading) {
      return <div>loading...</div>;
    }

    return (
      <Router>
        

        <Switch>
        <Route path='/country/:name'>
            <h1>podstrona</h1>
          </Route>
          <Route path='/'>
            <CountryInfoWrapper>
              <List countriesData={countries} />
            </CountryInfoWrapper>
          </Route>
          
        </Switch>
      </Router>
    );
  }
}

export default App;
