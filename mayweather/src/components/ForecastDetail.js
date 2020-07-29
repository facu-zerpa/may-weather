import React from "react";
import ForecastDetailCard from "./ForecastDetailCard";
import moment from "moment";
import PropTypes from "prop-types";

const ForecastDetail = ({ forecastDetail }) => {
  const titleDay = moment(forecastDetail[0].dt_txt).format("dddd");

  const shortDay = moment(forecastDetail[0].dt_txt).format("L").slice(0, 5);

  return (
    <div className="col-12 my-2 px-md-5 py-2 text-center d-block">
      <p className="mb-4 py-2 font-weight-bold h4">
        Forecast Details for: {`${titleDay} ${shortDay}`}
      </p>
      {forecastDetail.map((detail) => (
        <ForecastDetailCard key={detail.dt} detail={detail} />
      ))}
    </div>
  );
};

ForecastDetail.propTypes = {
  forecastDetail: PropTypes.array.isRequired,
};

export default ForecastDetail;
