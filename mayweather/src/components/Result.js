import React from "react";
import Current from "./Current";
import Forecast from "./Forecast";
import Uvi from "./Uvi";
import PropTypes from "prop-types";

const Result = ({
  current,
  forecast,
  currentUvi,
  forecastUvi,
  historyUvi,
  selection,
  setSelection,
}) => {
  if (
    Object.keys(current).length === 0 &&
    forecast.length === 0 &&
    Object.keys(currentUvi).length === 0 &&
    forecastUvi.length === 0 &&
    historyUvi.length === 0
  )
    return null;

  const handleClick = (e) => {
    if (e.target.name === "current") {
      setSelection("current");
    } else if (e.target.name === "forecast") {
      setSelection("forecast");
    } else if (e.target.name === "uvi") {
      setSelection("uvi");
    }
  };

  const component =
    selection === "current" ? (
      <Current current={current} />
    ) : selection === "forecast" ? (
      <Forecast forecast={forecast} />
    ) : (
      <Uvi
        currentUvi={currentUvi}
        forecastUvi={forecastUvi}
        historyUvi={historyUvi}
      />
    );

  return (
    <div className="row mt-4">
      <div className="col-md-6 offset-md-1 offset-1">
        <div className="row">
          <div className="col-3 pl-1">
            <button
              className="btn btn-primary btn-sm btn-block"
              name="current"
              onClick={handleClick}
            >
              Current
            </button>
          </div>
          <div className="col-3 pl-1">
            <button
              className="btn btn-primary btn-sm btn-block"
              name="forecast"
              onClick={handleClick}
            >
              Forecast
            </button>
          </div>
          <div className="col-3 pl-1">
            <button
              className="btn btn-primary btn-sm btn-block"
              name="uvi"
              onClick={handleClick}
            >
              UVI
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-10 offset-md-1 result-container p-2">
        {component}
      </div>
    </div>
  );
};

Result.propTypes = {
  current: PropTypes.object.isRequired,
  forecast: PropTypes.array.isRequired,
  currentUvi: PropTypes.object.isRequired,
  forecastUvi: PropTypes.array.isRequired,
  historyUvi: PropTypes.array.isRequired,
  selection: PropTypes.string.isRequired,
  setSelection: PropTypes.func.isRequired,
};

export default Result;
