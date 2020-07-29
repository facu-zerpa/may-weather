import React from "react";
import UviForecastDetail from "./UviForecastDetail";
import PropTypes from "prop-types";

const UviForecast = ({ listForecastUvi }) => {
  return (
    <div className="col-12 p-3">
      <h4>Forecasted UVI index:</h4>
      <div className="row mx-3">
        <div className="col-12 result">
          <div className="row d-flex justify-content-center py-2 px-2 px-md-0">
            {listForecastUvi.map((uvi) => (
              <UviForecastDetail uvi={uvi} key={uvi.date} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

UviForecast.propTypes = {
  listForecastUvi: PropTypes.array.isRequired,
};

export default UviForecast;
