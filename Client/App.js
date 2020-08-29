import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import "@fortawesome/fontawesome-free/css/all.css";
export default class App extends Component {
  render() {
    return <div className="text-center">hello world</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
