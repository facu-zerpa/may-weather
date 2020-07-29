import React, { useState } from "react";
import PropTypes from "prop-types";
import { listCountry } from "../data/listCountry";
import he from "he";

const Form = ({ search, setSearch, setConsult, setSelection }) => {
  const { city, country } = search;

  const [errorCity, setErrorCity] = useState(false);
  const [errorCountry, setErrorCountry] = useState(false);

  const handleOnChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city === "" && country === "") {
      setErrorCity(true);
      setErrorCountry(true);
    } else if (city === "") {
      setErrorCity(true);
      setErrorCountry(false);
    } else if (country === "") {
      setErrorCity(false);
      setErrorCountry(true);
    } else {
      setErrorCity(false);
      setErrorCountry(false);
      setConsult(true);
      setSelection("current");
    }
  };

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="row d-flex justify-content-center my-1">
        <div className="col-10 col-md-4 mt-3 mt-md-0">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              placeholder="Enter your location"
              value={city}
              onChange={handleOnChange}
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <i className="fas fa-search"></i>
              </div>
            </div>
          </div>
          {errorCity && (
            <small className="text-danger">Please enter city</small>
          )}
        </div>
        <div className="col-10 col-md-3 mt-3 mt-md-0">
          <select
            className="form-control"
            id="country"
            name="country"
            value={country}
            onChange={handleOnChange}
          >
            <option value="" disabled>
              Country
            </option>
            {listCountry.map((country) => (
              <option key={country.value} value={country.value}>{`${he.decode(
                country.flag
              )} ${country.country}`}</option>
            ))}
          </select>
          {errorCountry && (
            <small className="text-danger">Please select country</small>
          )}
        </div>
      </div>
      <div className="row my-3">
        <div className="col-12 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Check Weather
          </button>
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  setConsult: PropTypes.func.isRequired,
  setSelection: PropTypes.func.isRequired,
};

export default Form;
