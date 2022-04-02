import React from "react";
import { PeopleList, PersonDetails } from "../sw-components";
import Row from "../row";
import { withRouter } from "react-router-dom";

const PeoplePage = ({ selectedItemId, history }) => {
  const setSelectedItemId = (id) => {
    history.push(id);
  };

  const leftElement = <PeopleList setSelectedItemId={setSelectedItemId} />;
  const rightElement = <PersonDetails selectedItemId={selectedItemId} />;

  return <Row left={leftElement} right={rightElement} />;
};

export default withRouter(PeoplePage);
