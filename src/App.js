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
      <CountryInfoWrapper>
        <List countriesData={countries} />
      </CountryInfoWrapper>
        // <Router>
        //   <div>
        //     <nav>
        //       <ul>
        //         <li>
        //           <Link to="/">Home</Link>
        //         </li>
        //         <li>
        //           <Link to="/about">About</Link>
        //         </li>
        //         <li>
        //           <Link to="/users">Users</Link>
        //         </li>
        //       </ul>
        //     </nav>
        //   <Switch>
        //     <Route path="/about">
        //       <h2>About</h2>
        //     </Route>
        //     <Route path="/users">
        //       <h2>Users</h2>
        //     </Route>
        //     <Route path="/">
        //       <h2>Home</h2>
        //     </Route>
        //     </Switch>
        //   </div>
        // </Router>
    );
  }
}

export default App;
