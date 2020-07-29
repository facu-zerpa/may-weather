import React, { Fragment } from "react";
import Header from "./components/Header";
import MayWeather from "./components/MayWeather";

function App() {
  return (
    <Fragment>
      <Header title="MayWeather!" />
      <MayWeather />
    </Fragment>
  );
}

export default App;
