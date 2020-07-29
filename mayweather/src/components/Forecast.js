import React, { useState } from "react";
import ForecastCard from "./ForecastCard";
import ForecastDetail from "./ForecastDetail";
import PropTypes from "prop-types";

const Forecast = ({ forecast }) => {
  const [forecastDetail, setForecastDetail] = useState([]);

  // Get days of list forecast
  const listDay = [
    ...new Set(forecast.map((item) => item.dt_txt.slice(0, 10))),
  ];

  // Get only 5 dates
  if (listDay.length === 6) {
    listDay.pop();
  }

  // Get for each day the weather with an interval of 3 hours
  const listForecast = listDay.map((day) => {
    const forecastDay = forecast.filter(
      (item) => item.dt_txt.slice(0, 10) === day
    );
    return forecastDay;
  });

  return (
    <div className="row m-2 result d-flex justify-content-center p-2 p-md-0">
      {listForecast.map((forecastDay, index) => (
        <ForecastCard
          key={index}
          forecastDay={forecastDay}
          setForecastDetail={setForecastDetail}
        />
      ))}
      {forecastDetail.length === 0 ? null : (
        <ForecastDetail forecastDetail={forecastDetail} />
      )}
    </div>
  );
};

Forecast.propTypes = {
  forecast: PropTypes.array.isRequired,
};

export default Forecast;
