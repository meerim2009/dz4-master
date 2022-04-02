import React from "react";
import { PlanetsList, PlanetsDetails } from "../sw-components";
import Row from "../row";
import { withRouter } from "react-router-dom";

const PlanetsPage = ({ selectedItemId, history }) => {
  const setSelectedItemId = (id) => {
    history.push(id);
  };

  const leftElement = <PlanetsList setSelectedItemId={setSelectedItemId} />;
  const rightElement = <PlanetsDetails selectedItemId={selectedItemId} />;

  return <Row left={leftElement} right={rightElement} />;
};

export default withRouter(PlanetsPage);
