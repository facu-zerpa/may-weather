import React from "react";
import UviScale from "./UviScale";
import PropTypes from "prop-types";

const UviCurrent = ({ currentUvi }) => {
  const value = currentUvi.value;

  return (
    <div className="col-12 p-3">
      <h4>Current UVI Index: </h4>
      <div className="row my-4 py-3">
        <div className="col-12 text-center">
          <h2 className="font-weight-bold">{value}</h2>
          <UviScale uviIndex={value} />
        </div>
      </div>
    </div>
  );
};

UviCurrent.propTypes = {
  currentUvi: PropTypes.object.isRequired,
};

export default UviCurrent;
