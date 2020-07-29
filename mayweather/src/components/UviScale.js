import React, { Fragment } from "react";
import PropTypes from "prop-types";

const UviScale = ({ uviIndex }) => {
  return (
    <Fragment>
      <div className="row d-flex justify-content-center">
        <div className="col-2">
          {uviIndex >= 0 && uviIndex < 2 ? (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-caret-down-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          ) : null}
        </div>
        <div className="col-2">
          {uviIndex >= 2 && uviIndex < 4 ? (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-caret-down-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          ) : null}
        </div>
        <div className="col-2">
          {uviIndex >= 4 && uviIndex < 6 ? (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-caret-down-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          ) : null}
        </div>
        <div className="col-2">
          {uviIndex >= 6 && uviIndex < 8 ? (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-caret-down-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          ) : null}
        </div>
        <div className="col-2">
          {uviIndex >= 8 && uviIndex <= 10 ? (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-caret-down-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          ) : null}
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-2 green uvi"></div>
        <div className="col-2 yellow uvi"></div>
        <div className="col-2 brown uvi"></div>
        <div className="col-2 red uvi"></div>
        <div className="col-2 purple uvi"></div>
      </div>
    </Fragment>
  );
};

UviScale.propTypes = {
  uviIndex: PropTypes.number.isRequired,
};

export default UviScale;
