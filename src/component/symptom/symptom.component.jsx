import React from "react";
import "./symptom.style.scss";
import { MDBTypography } from "mdbreact";
import { connect } from "react-redux";
import Card from "../card/card.component";

const SymptomCard = ({ symptomData: { symptomData } }) => {
  return (
    <div className="symptom-data-container">
      <div className="heading-container">
        <MDBTypography tag="h1" variant="h1" className="card-heading">
          Symptom
        </MDBTypography>
      </div>
      <Card cardData={symptomData} title={"Symptom"} />
    </div>
  );
};

const mapStateToPorps = (state) => ({
  symptomData: state.symptom,
});

export default connect(mapStateToPorps)(SymptomCard);
