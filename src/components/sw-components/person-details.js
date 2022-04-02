import React from "react";
import { ItemDetails, Record } from "../item-details";
import withSwapi from "../hoc";

const withRenderFunc = (View) => {
  return (props) => {
    return (
      <View {...props}>
        <Record label="Gender" fieldName="gender" />
        <Record label="Birth year" fieldName="birthYear" />
        <Record label="Eye color" fieldName="eyeColor" />
        <Record label="Height" fieldName="height" />
        <Record label="Mass" fieldName="mass" />
      </View>
    );
  };
};

const PersonDetails = withSwapi(withRenderFunc(ItemDetails), (swapi) => ({
  getData: swapi.getPerson,
  getImage: swapi.getPersonImage,
}));

export default PersonDetails;
