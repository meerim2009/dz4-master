import React from "react";
import ItemList from "../item-list";
import PlanetList from "../planet-list";
import StarshipList from "../starship-list";
import withSwapi from "../hoc";

const withRenderFunc = (View, renderFunc) => {
  return (props) => {
    return <View {...props}>{renderFunc}</View>;
  };
};

const PeopleList = withSwapi(
  withRenderFunc(ItemList, (item) => item.name),
  (swapi) => ({ getData: swapi.getAllPeople })
);

const PlanetsList = withSwapi(
  withRenderFunc(PlanetList, (item) => item.name),
  (swapi) => ({ getData: swapi.getAllPlanets })
);

const StarshipsList = withSwapi(
  withRenderFunc(StarshipList, (item) => item.name),
  (swapi) => ({ getData: swapi.getAllStarships })
);

export { PeopleList, PlanetsList, StarshipsList };
