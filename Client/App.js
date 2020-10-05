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
import Navbar from "./components/Navbar";
import Home from "./components/Home";

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {/* <Navbar /> */}

        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/signin" component={Signin}></Route>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
