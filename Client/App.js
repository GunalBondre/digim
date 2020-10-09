import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import "@fortawesome/fontawesome-free/css/all.css";
import { ThemeProvider } from "styled-components";
import * as theme from "./Shared/theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import NavbarClass from "./components/NavbarClass";
import Home from "./components/Home";
import Pricing from "./components/Pricing";

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <NavbarClass />

        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/signin" component={Signin}></Route>
            <Route exact path="/pricing" component={Pricing}></Route>

          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
