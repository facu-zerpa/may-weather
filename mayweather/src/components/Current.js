import React from "react";
import PropTypes from "prop-types";

const Current = ({ current }) => {
  // Convert UnixTimesTamp to Date format
  const unixTimestamp = (t) => {
    const datet = new Date(t * 1000);
    const hour = datet.getHours();
    const minute = "0" + datet.getMinutes();
    const second = "0" + datet.getSeconds();
    return hour + ":" + minute.substr(-2) + ":" + second.substr(-2);
  };

  const srcImg = `https://openweathermap.org/img/wn/${current.weather[0].icon}.png`;
  const tmpMax = current.main.temp_max;
  const titleWeather = current.weather[0].main;
  const pressure = current.main.pressure;
  const sunrise = unixTimestamp(current.sys.sunrise);
  const speed = current.wind.speed;
  const humidity = current.main.humidity;
  const tmpMin = current.main.temp_min;
  const sunset = unixTimestamp(current.sys.sunset);

  return (
    <div className="row m-2 result">
      <div className="col-4 text-center my-2">
        <div className="d-flex justify-content-center">
          <img
            src={srcImg}
            height="80px"
            width="80px"
            className="my-2"
            alt="Icon Current"
          />
        </div>
        <p className="h2">{tmpMax}&#8451;</p>
        <p>{titleWeather}</p>
      </div>
      <div className="col-4 my-4">
        <p>
          <strong>Preassure: </strong>
          {pressure} hpm
        </p>
        <p>
          <strong>Max Temp: </strong>
          {tmpMax}&#8451;
        </p>
        <p>
          <strong>Sunrise: </strong>
          {sunrise}
        </p>
        <p>
          <strong>Wind: </strong>
          {speed} Km/h
        </p>
      </div>
      <div className="col-4 my-4">
        <p>
          <strong>Humidity: </strong>
          {humidity}%
        </p>
        <p>
          <strong>Min Temp: </strong>
          {tmpMin}&#8451;
        </p>
        <p>
          <strong>Sunset: </strong>
          {sunset}
        </p>
      </div>
    </div>
  );
};

Current.propTypes = {
  current: PropTypes.object.isRequired,
};

export default Current;
