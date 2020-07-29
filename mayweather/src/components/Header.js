import React, { useState, useEffect } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import Axios from "axios";
import CurrentHeader from "./CurrentHeader";

const Header = ({ title }) => {
  const [time, setTime] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));
  const [view, setView] = useState(false);
  const [current, setCurrent] = useState({});

  const consultAPI = async (lat, lon) => {
    const apiKEY = "37202fc4687c90288f1f8cfbd99db08e";
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKEY}`;

    const result = await Axios.get(URL);

    setCurrent(result.data);
  };

  const handleOnClick = () => {
    let lat, lon;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        consultAPI(lat, lon);
        setView(true);
      });
    }
  };

  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);
  }, [time]);

  return (
    <nav className="container py-1 my-2">
      <div className="row d-flex justify-content-between border-bottom">
        <div className="col-12 col-md-3 bg-transparent d-flex align-items-center justify-content-center">
          <button
            className="btn btn-primary btn-sm mb-2"
            onClick={handleOnClick}
          >
            View Weather
          </button>
        </div>
        {view && <CurrentHeader current={current} />}
        <div className="col-12 col-md-3 bg-transparent d-flex align-items-center justify-content-center mb-2 mb-md-0">
          <p className="m-0 p-0">{time}</p>
          <p>{""}</p>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
