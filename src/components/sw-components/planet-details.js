import React from "react";
import { PlanetDetails, Record } from "../planet-details";
import withSwapi from "../hoc";

const withRenderFunc = (View) => {
  return (props) => {
    return (
      <View {...props}>
        <Record label="Population" fieldName="population" />
        <Record label="Rotation Period" fieldName="rotationPeriod" />
        <Record label="Diameter" fieldName="diameter" />
        <Record label="Climate" fieldName="climate" />
        <Record label="Gravity" fieldName="gravity" />
      </View>
    );
  };
};

const PlanetsDetails = withSwapi(withRenderFunc(PlanetDetails), (swapi) => ({
  getData: swapi.getPlanet,
  getImage: swapi.getPlanetImage,
}));

export default PlanetsDetails;
