import React, { Component } from "react";
import "./App.css";
import "./include/bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Japón</th>
              <th scope="col">Filipinas</th>
              <th scope="col">Thailandia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Ciudad</td>
              <td>Mar</td>
              <td>Mar y Montaña </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Tradición</td>
              <td>Relax</td>
              <td>Excursiones</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Mi sueño</td>
              <td>Tu sueño</td>
              <td>Un lugar mas</td>
            </tr>
          </tbody>
        </table>
        <img
          className="img-fluid"
          alt="sea"
          src="https://static9lonelyplanetes.cdnstatics.com/sites/default/files/styles/max_1300x1300/public/fotos/Filipinas_Palawan_IslaCoron_500px_74647277_Kevin%20Boutwell_500px.jpg?itok=6U_u6wFD"
        />
        <h>
          {" "}
          <b>Como lo hacemos?</b>{" "}
        </h>
        <p>
          Que lugar escoger, es tan dificil, queremos ir a todos pero por uno
          tienes que empezar entonces como lo decidimos haciendo una lista de
          sitios que visitar y que nos gustan mas
        </p>
        <ul>
          <li>Filipinas:Bucear con ballenas y usar barcas como taxis</li>
          <li>Japón sumergirte en su cultura antigua y viajar a otra época</li>
          <li>
            Thailandia vivir un poco de ambas opciones en una + montar en
            elefantes
          </li>
        </ul>
        <button type="button">Vamos a ello</button>

        <th>Cuantos meses en Filipinas:</th>
        <th>2</th>

        <tr>
          <ul>
            <td>
              {" "}
              <li>Enero-Marzo</li>{" "}
            </td>
            <td>$1000 (vida completa)</td>
            <ul />
          </ul>
        </tr>
      </div>
    );
  }
}

export default App;
