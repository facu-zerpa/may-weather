import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

const ForecastDetailCard = ({ detail }) => {
  const displayHour = () => {
    const nextHour = moment.unix(parseInt(detail.dt) + 21600).format("LT");
    const display = `${moment(detail.dt_txt).format("LT")} - ${nextHour}`;
    return display;
  };

  const srcImg = `https://openweathermap.org/img/wn/${detail.weather[0].icon}.png`;
  const tmpMax = detail.main.temp_max;
  const weatherMain = detail.weather[0].main;
  const pressure = detail.main.pressure;
  const tmpMin = detail.main.temp_min;
  const speed = detail.wind.speed;
  const humidity = detail.main.humidity;

  return (
    <div className="row mx-md-4 mb-2 result">
      <div className="col-4 text-center my-2">
        <small className="font-weight-bold d-block">{displayHour()}</small>
        <img
          src={srcImg}
          alt="Icon Forecast Detail Card"
          height="auto"
          width="auto"
          className="my-2"
        />
        <p className="h3 m-0">{tmpMax}&#8451;</p>
        <p className="m-0">{weatherMain}</p>
      </div>
      <div className="col-4 my-2">
        <p>
          <strong>Pressure: </strong>
          {pressure} hpm
        </p>
        <p>
          <strong>Min Temp: </strong>
          {tmpMin}&#8451;
        </p>
        <p>
          <strong>Wind: </strong>
          {speed} Km/h
        </p>
      </div>
      <div className="col-4 my-2">
        <p>
          <strong>Humidity: </strong>
          {humidity}%
        </p>
        <p>
          <strong>Min Temp: </strong>
          {tmpMax}&#8451;
        </p>
      </div>
    </div>
  );
};

ForecastDetailCard.propTypes = {
  detail: PropTypes.object.isRequired,
};

export default ForecastDetailCard;
