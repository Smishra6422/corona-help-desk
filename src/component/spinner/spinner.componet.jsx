import React from "react";
import "./spinner.style.scss";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div class="spinner-border text-success" role="status">
        <span class="sr-only">Loading... </span>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Spinner;
// <div className="spinner-container">
//       <div className="spinner-grow text-primary spinner" role="status">
//         <span className="sr-only">Loading...</span>
//         <p className="text">Loading...</p>
//       </div>
//     </div>
