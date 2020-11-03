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
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Email from "./components/Email";
import Dashboard from "./components/Dashboard";
import Contacts from "./modules/Contacts";
import ContactCopy from "./modules/ContactCopy";
import alertActions from "./redux/actions/alert.action";
import connect from "react-redux";
import { Provider } from "react-redux";
import { store } from "./redux/helpers/store";
import CreateEmail from "./modules/CreateEmail";
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <NavbarClass />

          <Router>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/signup' component={Signup}></Route>
              <Route exact path='/signin' component={Signin}></Route>
              <Route exact path='/pricing' component={Pricing}></Route>
              <Route exact path='/sidebar' component={Sidebar}></Route>
              <Route exact path='/dashboard' component={Dashboard}></Route>

              <Route exact path='/camp/email' component={Email}></Route>
              <Route
                exact
                path='/users/import-options'
                component={Contacts}
              ></Route>
              <Route
                exact
                path='/users/import-option-copy'
                component={ContactCopy}
              ></Route>
              <Route
                exact
                path='/users/createEmail'
                component={CreateEmail}
              ></Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
