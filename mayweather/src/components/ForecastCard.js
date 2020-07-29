import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

const ForecastCard = ({ forecastDay, setForecastDetail }) => {
  // Get min temperature of day
  const minTmp = (forecastDay) =>
    forecastDay.reduce((prev, curr) =>
      prev.main.temp_min < curr.main.temp_min ? prev : curr
    );

  // Get max temperature of day
  const maxTmp = (forecastDay) =>
    forecastDay.reduce((prev, curr) =>
      prev.main.temp_max >= curr.main.temp_max ? prev : curr
    );

  const titleDay = moment(forecastDay[0].dt_txt).format("dddd");

  const shortDay = moment(forecastDay[0].dt_txt).format("L").slice(0, 5);

  const icon = maxTmp(forecastDay).weather[0].icon;

  const showMinTmp = minTmp(forecastDay).main.temp_min;

  const showMaxTmp = maxTmp(forecastDay).main.temp_max;

  const handleClick = (e) => {
    setForecastDetail(forecastDay);
  };

  return (
    <div className="col-12 col-md-2 result m-md-2 text-center mb-1 mb-md-0">
      <div className="row d-flex flex-md-column align-items-center">
        <div className="col-3 col-md-12">
          <p className="mt-3 mb-0 font-weight-bold">{titleDay}</p>
          <p className="my-1">
            <small>{shortDay}</small>
          </p>
        </div>
        <div className="col-3 col-md-12">
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${icon}.png`}
              height="auto"
              width="auto"
              className="my-2"
              alt="Icon Forecast Card"
            />
          </div>
        </div>
        <div className="col-3 col-md-12">
          <p>
            <small className="font-weight-bold">Min: </small> {showMinTmp}
            &#8451;
          </p>
          <p>
            <small className="font-weight-bold">Max: </small> {showMaxTmp}
            &#8451;
          </p>
        </div>
        <div className="col-3 col-md-12">
          <button className="btn btn-sm btn-primary mb-2" onClick={handleClick}>
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

ForecastCard.propTypes = {
  forecastDay: PropTypes.array.isRequired,
  setForecastDetail: PropTypes.func.isRequired,
};

export default ForecastCard;
