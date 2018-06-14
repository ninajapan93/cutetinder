import React, { Component } from "react";
import "./App.css";
import "./include/bootstrap";

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <h4>Contras</h4>
          <ul>
            <li>La música es horrible</li>
            <li>No despierta cabrea</li>
            <li>Me has creado un trauma con tanto aplazamiento</li>
          </ul>
        </div>
        <div className="col">
          <h4>Pros</h4>
          <ul>
            <li>Reconozco que me despierta pero no de la manera que quiero</li>
            <li>
              Si un dia te aburres y quieres crear pelea la alarma funciona
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
