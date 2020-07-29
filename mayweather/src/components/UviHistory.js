import React, { useEffect } from "react";
import Plotly from "plotly.js-dist";
import moment from "moment";
import PropTypes from "prop-types";

const UviHistory = ({ historyUvi }) => {
  // Get list of value UVI
  const uviValue = historyUvi.map((uvi) => uvi.value);
  // Get list of day
  const dateValue = historyUvi.map((uvi) =>
    moment(uvi.date_iso).format("L").slice(0, 5)
  );

  const trace = {
    x: dateValue,
    y: uviValue,
    mode: "lines+markers",
    type: "scatter",
  };

  const data = [trace];

  const layout = {
    xaxis: {
      title: "Days",
      showGrid: false,
      zeroline: false,
    },
    yaxis: {
      title: "UVI",
      showline: false,
    },
  };

  var config = { responsive: true };

  useEffect(() => {
    Plotly.newPlot("myPlot", data, layout, config);
  }, []);

  return (
    <div className="col-12 p-3">
      <h4>Last 30 days UVI index:</h4>
      <div className="row">
        <div className="col-12">
          <div id="myPlot"></div>
        </div>
      </div>
    </div>
  );
};

UviHistory.propTypes = {
  historyUvi: PropTypes.array.isRequired,
};

export default UviHistory;
