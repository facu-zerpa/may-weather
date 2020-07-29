import React from "react";
import PropTypes from "prop-types";

const UviIndicator = ({ uvi }) => {
  let component;

  if (uvi >= 0 && uvi < 2) {
    component = <div className="circle m-auto my-1 green"></div>;
  } else if (uvi >= 2 && uvi < 4) {
    component = <div className="circle m-auto my-1 yellow"></div>;
  } else if (uvi >= 4 && uvi < 6) {
    component = <div className="circle m-auto my-1 brown"></div>;
  } else if (uvi >= 6 && uvi < 8) {
    component = <div className="circle m-auto my-1 red"></div>;
  } else {
    component = <div className="circle m-auto my-1 purple"></div>;
  }
  return component;
};

UviIndicator.propTypes = {
  uvi: PropTypes.number.isRequired,
};

export default UviIndicator;
