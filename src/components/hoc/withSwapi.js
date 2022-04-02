import React from "react";
import { Context } from "../swapi-context";

const withSwapi = (Component, divideFunc) => {
  return (props) => {
    return (
      <Context>
        {(swapi) => {
          const methods = divideFunc(swapi);
          return <Component {...methods} {...props} />;
        }}
      </Context>
    );
  };
};

export default withSwapi;
