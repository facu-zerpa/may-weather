import React from "react";
import moment from "moment";
import UviIndicator from "./UviIndicator";
import PropTypes from "prop-types";

const UviForecastDetail = ({ uvi }) => {
  const day = moment(uvi.date_iso).format("dddd");
  const date = moment(uvi.date_iso).format("L").slice(0, 5);
  return (
    <div className="col-12 col-md-2 text-center result m-1 d-flex flex-row flex-md-column justify-content-center align-items-center">
      <div className="m-2 m-md-0 col-4 col-md-12">
        <p className="my-1 font-weight-bold ">{day}</p>
        <p className="my-1 font-weight-bold">{date}</p>
      </div>
      <UviIndicator uvi={uvi.value} />
      <div className="m-2 m-md-0 col-4 col-md-12">
        <p className="my-1 font-weight-bold">{uvi.value}</p>
      </div>
    </div>
  );
};

UviForecastDetail.propTypes = {
  uvi: PropTypes.object.isRequired,
};

export default UviForecastDetail;
