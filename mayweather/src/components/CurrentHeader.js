import React from "react";
import PropTypes from "prop-types";

const CurrentHeader = ({ current }) => {
  if (Object.keys(current).length === 0) return null;

  return (
    <div className="col-md-6 bg-transparent mb-2 mb-md-0">
      <div className="row d-md-flex align-md-items-center justify-content-center">
        <div className="col-4 col-md-4 text-center d-md-flex align-items-center">
          <small className="font-weight-bold">{current.name}</small>
        </div>
        <div className="col-4 col-md-4 text-center d-md-flex align-items-center justify-content-center">
          <img
            src={`https://openweathermap.org/img/wn/${current.weather[0].icon}.png`}
            alt="Icon Current Header"
            height="auto"
            width="auto"
          />
        </div>
        <div className="col-4 col-md-4 text-center d-md-flex align-items-center">
          <small className="font-weight-bold d-block">
            Minimum: {current.main.temp_max}&#8451;
          </small>
          <small className="font-weight-bold d-block">
            Maximum: {current.main.temp_min}&#8451;
          </small>
        </div>
      </div>
    </div>
  );
};

CurrentHeader.propTypes = {
  current: PropTypes.object.isRequired,
};

export default CurrentHeader;
