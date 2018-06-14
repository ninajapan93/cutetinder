import React, { Component } from "react";
import "./App.css";
import "./include/bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cosa: "Qui es la mes guapa?"
    };
  }

  canviarText() {
    this.setState({ cosa: this.state.cosa + " La Aleida!" });
  }

  render() {
    return (
      <div>
        <button
          onClick={this.canviarText.bind(this)}
          type="button"
          class="btn btn-danger"
        >
          {this.state.cosa}
        </button>

        <p>
          Vale en esta columna explicare el porque me puede afectar
          tanto/odiarlo aunque te parezca una tonteria.
        </p>
      </div>
    );
  }
}

export default App;
