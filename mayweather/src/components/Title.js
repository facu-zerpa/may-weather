import React from "react";
import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="font-weight-bold">{title}</h1>
      </div>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
