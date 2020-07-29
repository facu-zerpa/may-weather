import React, { useState, useEffect } from "react";
import Title from "./Title";
import Form from "./Form";
import Spinner from "./Spinner";
import Result from "./Result";
import Error from "./Error";
import Axios from "axios";

const MayWeather = () => {
  // State
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });
  const [consult, setConsult] = useState(false);
  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState([]);
  const [currentUvi, setCurrentUvi] = useState({});
  const [forecastUvi, setForecastUvi] = useState([]);
  const [historyUvi, setHistoryUvi] = useState([]);
  const [selection, setSelection] = useState("current");
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(false);

  const { city, country } = search;

  // Get startTime and endTime for history UVI
  const getTimes = () => {
    const endTime = Math.floor(Date.now() / 1000);
    const start = new Date();
    start.setDate(start.getDate() - 30);
    const startTime = Math.floor(start / 1000);
    const time = {
      startTime,
      endTime,
    };
    return time;
  };

  useEffect(() => {
    const consultAPI = async () => {
      // AppId of OpenWeather
      const apiKEY = " ";

      const URLCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKEY}`;
      const URLForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${apiKEY}`;

      const [dataCurrent, dataForecast] = await Promise.allSettled([
        Axios.get(URLCurrent),
        Axios.get(URLForecast),
      ]);

      let URLUviCurrent,
        URLUviForcast,
        URLUviHistory,
        uviCurrent,
        uviForecast,
        uviHistory;

      if (dataCurrent.status !== "rejected") {
        const lat = dataCurrent.value.data.coord.lat;
        const lon = dataCurrent.value.data.coord.lon;
        const { startTime, endTime } = getTimes();
        URLUviCurrent = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKEY}`;
        URLUviForcast = `https://api.openweathermap.org/data/2.5/uvi/forecast?lat=${lat}&lon=${lon}&appid=${apiKEY}`;
        URLUviHistory = `https://api.openweathermap.org/data/2.5/uvi/history?lat=${lat}&lon=${lon}&start=${startTime}&end=${endTime}&cnt=30&appid=${apiKEY}`;

        [uviCurrent, uviForecast, uviHistory] = await Promise.allSettled([
          Axios.get(URLUviCurrent),
          Axios.get(URLUviForcast),
          Axios.get(URLUviHistory),
        ]);
      }

      setSpinner(true);

      if (
        dataCurrent.status === "fulfilled" &&
        dataForecast.status === "fulfilled" &&
        uviCurrent.status === "fulfilled" &&
        uviForecast.status === "fulfilled" &&
        uviHistory.status === "fulfilled"
      ) {
        setTimeout(() => {
          setError(false);
          setCurrent(dataCurrent.value.data);
          setForecast(dataForecast.value.data.list);
          setCurrentUvi(uviCurrent.value.data);
          setForecastUvi(uviForecast.value.data);
          setHistoryUvi(uviHistory.value.data);
          setSpinner(false);
        }, 3000);
      } else {
        setTimeout(() => {
          setError(true);
          setSpinner(false);
        }, 3000);
      }
    };
    if (consult) {
      consultAPI();
      setConsult(false);
    }
  }, [consult, error]);

  return (
    <section className="container my-2">
      <Title title="Welcome to MayWeather!" />
      <Form
        search={search}
        setSearch={setSearch}
        setConsult={setConsult}
        setSelection={setSelection}
      />
      {spinner ? (
        <Spinner />
      ) : error ? (
        <Error />
      ) : (
        <Result
          current={current}
          forecast={forecast}
          currentUvi={currentUvi}
          forecastUvi={forecastUvi}
          historyUvi={historyUvi}
          selection={selection}
          setSelection={setSelection}
          error={error}
        />
      )}
    </section>
  );
};

export default MayWeather;
