import React, { Component } from "react";
import "./App.css";

import Header from "./Header";
import Info from "./Info";
import Columns from "./Columns";
import Table from "./Table";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Info />
          <Columns />
          <Table />
        </div>
      </div>
    );
  }
}

export default App;
