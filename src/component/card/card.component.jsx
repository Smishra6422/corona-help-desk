import React from "react";
import "./card.style.scss";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";
// import { connect } from "react-redux";

const Card = ({ cardData, number, precaution }) => (
  <MDBRow style={{ marginTop: "1.5rem" }} className="card-container">
    {cardData ? (
      cardData.map((card) => (
        <MDBCol md="3" className="card-item">
          <MDBCard className="card-data">
            <MDBCardImage
              top
              src={card.imageUrl}
              overlay="white-slight"
              hover
              waves
              alt={card.title}
              className="card-image"
            />
            <hr className="hr-light" />
            <MDBCardBody className="elegant-color white-text rounded-bottom ">
              <MDBCardTitle>
                {card.title} {number ? ": " + card.number : ""}
              </MDBCardTitle>

              {precaution ? (
                <div>
                  <hr className="hr-light" />
                  <MDBCardText className="white-text">
                    <span className="tips">Some Tips :</span> {card.description}
                  </MDBCardText>
                </div>
              ) : (
                ""
              )}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      ))
    ) : (
      <div className="no-data-found">
        <p>Sorry No data found! .</p>
        <p>Please try again or search with another country.</p>
        <p>Or check your internet connection !.</p>
      </div>
    )}
  </MDBRow>
);

export default Card;
