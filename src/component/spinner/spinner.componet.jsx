import React from "react";
import "./spinner.style.scss";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner-grow text-primary spinner" role="status">
        <span className="sr-only">Loading...</span>
        <p className="text">Loading...</p>
      </div>
    </div>
  );
};

export default Spinner;
