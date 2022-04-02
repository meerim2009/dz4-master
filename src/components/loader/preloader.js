import React, { useState } from "react";
import "../../components/loader/preloader.css";

const Error = () => <h1>Something went wrong...</h1>;
const Preloader = () => {
  const [data, setData] = useState({
    loading: true,
    error: false,
  });
  function loadData() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 4000);
    });
  }

  loadData();

  if (data.error) {
    return <Error />;
  }

  return (
    <div>
      <div id="preloader" className="visible"></div>
    </div>
  );
};

export default Preloader;
