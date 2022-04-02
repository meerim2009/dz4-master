import React from "react";
import { StarshipDetails, Record } from "../starship-details";
import withSwapi from "../hoc";

const withRenderFunc = (View) => {
  return (props) => {
    return (
      <View {...props}>
        <Record label="Model" fieldName="model" />
        <Record label="Manufacturer" fieldName="manufacturer" />
        <Record label="CostInCredits" fieldName="cost_in_credits" />
        <Record label="Length" fieldName="length" />
        <Record label="Crew" fieldName="crew" />
        <Record label="Passengers" fieldName="passengers" />
        <Record label="Cargo Capacity" fieldName="cargo_capacity" />
      </View>
    );
  };
};

const StarshipsDetails = withSwapi(
  withRenderFunc(StarshipDetails),
  (swapi) => ({
    getData: swapi.getStarship,
    getImage: swapi.getStarshipImage,
  })
);

export default StarshipsDetails;
