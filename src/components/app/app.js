import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PeoplePage } from "../pages";
import { PlanetPage } from "../pages";
import { StarshipPage } from "../pages";
import { Context } from "../swapi-context";
import SwapiService from "../../services/swapi-service";
import "./app.css";

const swapi = new SwapiService();

const App = () => {
  return (
    <div>
      <Context.Provider value={swapi}>
        <Router>
          <Header />
          <RandomPlanet />
          <Route
            path="/"
            exact={true}
            render={() => <h1>Hello STAR WARS!!!</h1>}
          ></Route>
          <Route
            path="/people/:id?/"
            render={({ match }) => {
              let selectedItemId = match.params.id;
              if (selectedItemId === undefined) {
                selectedItemId = "1";
              }
              return (
                <div>
                  {" "}
                  <PeoplePage selectedItemId={selectedItemId} />
                </div>
              );
            }}
          />
          <Route
            path="/planets/:id?/"
            render={({ match }) => {
              let selectedItemId = match.params.id;
              if (selectedItemId === undefined) {
                selectedItemId = "1";
              }
              return (
                <div>
                  {" "}
                  <PlanetPage selectedItemId={selectedItemId} />
                </div>
              );
            }}
          />
          <Route
            path="/starships/:id?"
            render={({ match }) => {
              let selectedItemId = match.params.id;
              if (selectedItemId === undefined) {
                selectedItemId = "1";
              }
              return (
                <div>
                  {" "}
                  <StarshipPage selectedItemId={selectedItemId} />
                </div>
              );
            }}
          ></Route>
        </Router>
      </Context.Provider>
    </div>
  );
};

export default App;
