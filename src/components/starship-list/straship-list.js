import React, { useState, useEffect } from "react";
import withSwapi from "../hoc";

const StarshipList = ({ setSelectedItemId, getData, children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then((data) => setData(data))
      .catch((error) => error);
  }, []);

  const elements = data.map((starship) => {
    return (
      <li
        key={starship.id}
        className="list-group-item"
        onClick={() => setSelectedItemId(starship.id)}
      >
        {children(starship)}
      </li>
    );
  });

  return <ul className="item-list list-group">{elements}</ul>;
};

const divideFunc = (swapi) => ({
  getData: swapi.getAllStarships,
});

export default withSwapi(StarshipList, divideFunc);
