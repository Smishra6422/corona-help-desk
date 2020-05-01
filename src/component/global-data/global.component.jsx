import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectWorldData,
  selectWorldFetching,
} from "../redux/world/world-selector";

import "./global.style.scss";
import { MDBTypography } from "mdbreact";
import Card from "../card/card.component";
import Spinner from "../spinner/spinner.componet";

import { fetchDataStart } from "../redux/world/world-action";

const WorldDataCard = ({ fetchDataStart, isFetching, coronaData }) => {
  useEffect(() => {
    fetchDataStart();
  }, [fetchDataStart]);

  return (
    <div className="symptom-data-container">
      <div className="heading-container">
        <MDBTypography tag="h1" variant="h1" className="card-heading">
          World Data
        </MDBTypography>
      </div>
      {isFetching === false ? (
        <Card cardData={coronaData} number />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToPorps = createStructuredSelector({
  coronaData: selectWorldData,
  isFetching: selectWorldFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataStart: () => dispatch(fetchDataStart()),
});

export default connect(mapStateToPorps, mapDispatchToProps)(WorldDataCard);
