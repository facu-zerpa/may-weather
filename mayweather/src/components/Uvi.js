import React from "react";
import UviCurrent from "./UviCurrent";
import UviForecast from "./UviForecast";
import UviHistory from "./UviHistory";
import PropTypes from "prop-types";

const Uvi = ({ currentUvi, forecastUvi, historyUvi }) => {
  // Get only 5 days
  const listForecastUvi = forecastUvi.slice(0, 5);

  return (
    <div className="row m-2 result">
      <UviCurrent currentUvi={currentUvi} />
      <UviForecast listForecastUvi={listForecastUvi} />
      <UviHistory historyUvi={historyUvi} />
    </div>
  );
};

Uvi.propTypes = {
  currentUvi: PropTypes.object.isRequired,
  forecastUvi: PropTypes.array.isRequired,
  historyUvi: PropTypes.array.isRequired,
};

export default Uvi;
