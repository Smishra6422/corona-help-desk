import React from "react";
import "./precaution.style.scss";
import { MDBTypography } from "mdbreact";
import { connect } from "react-redux";
import Card from "../card/card.component";

const PrecautionCard = ({ precautionData: { precautionData, isfet } }) => {
  console.log(isfet);
  return (
    <div className="symptom-data-container">
      <div className="heading-container">
        <MDBTypography tag="h1" variant="h1" className="card-heading">
          Precaution
        </MDBTypography>
      </div>
      <Card cardData={precautionData} precaution />
    </div>
  );
};

const mapStateToPorps = (state) => ({
  precautionData: state.precaution,
});

export default connect(mapStateToPorps)(PrecautionCard);
