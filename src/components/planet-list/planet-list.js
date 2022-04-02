import React, { useState, useEffect } from "react";
import withSwapi from "../hoc";
import "./planet-list.css";

const PlanetList = ({ setSelectedItemId, getData, children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then((data) => setData(data))
      .catch((error) => error);
  }, []);

  const elements = data.map((planet) => {
    return (
      <li
        key={planet.id}
        className="list-group-item"
        onClick={() => setSelectedItemId(planet.id)}
      >
        {children(planet)}
      </li>
    );
  });

  return <ul className="item-list list-group">{elements}</ul>;
};
const divideFunc = (swapi) => ({
  getData: swapi.getAllPlanets,
});

export default withSwapi(PlanetList, divideFunc);
