import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCountryData,
  selectCountryFetching,
} from "../redux/country/country-selector";

import "./homepage.style.scss";
import { MDBTypography } from "mdbreact";

import Card from "../card/card.component";
import Spinner from "../spinner/spinner.componet";

import { fetchCountryDataStart } from "../redux/country/country-action";

const Homepage = ({ fetchCountryDataStart, coronaData, isFetching }) => {
  const [country, setCountry] = useState("India");

  useEffect(() => {
    fetchCountryDataStart(country);
  }, [fetchCountryDataStart, country]);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className="symptom-data-container">
      <div className="form-container">
        <form className="form">
          <div className="grey-text">
            <select
              name="country"
              className="browser-default custom-select"
              onChange={handleChange}
            >
              <option>Choose your country</option>
              <option value="India">India</option>
              <option value="United-States">USA</option>
              <option value="Brazil">Brazil</option>
              <option value="Italy">Italy</option>
              <option value="United-Kingdom">UK</option>
              <option value="Germany">Germany</option>
              <option value="Turkey">Turkey</option>
              <option value="Russia">Russia</option>
              <option value="Iran">Iran</option>
              <option value="China">China</option>
              <option value="Australia">Australia</option>
              <option value="Pakistan">Pakistan</option>
            </select>
          </div>
        </form>
      </div>

      <div className="heading-container">
        <MDBTypography tag="h1" variant="h1" className="card-heading">
          {country}
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
  coronaData: selectCountryData,
  isFetching: selectCountryFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCountryDataStart: (country) => dispatch(fetchCountryDataStart(country)),
});

export default connect(mapStateToPorps, mapDispatchToProps)(Homepage);
