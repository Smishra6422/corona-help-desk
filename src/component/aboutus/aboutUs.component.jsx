import React from "react";
import "./about.style.scss";

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
} from "mdbreact";

class AboutUsPage extends React.Component {
  render() {
    return (
      <div id="parallaxintro">
        <MDBView src="/asset/images/seenu.jpeg" fixed>
          <MDBMask className="rgba-white-light" />
          <MDBContainer
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%", width: "100%", paddingTop: "15rem" }}
          >
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <h1 className="display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold">
                  Seenu{" "}
                  <span className="indigo-text font-weight-bold">Mishra</span>
                </h1>
                <hr className="hr-light my-4" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        <main>
          <MDBContainer>
            <MDBRow className="py-5">
              <MDBCol md="12" className="text-center">
                <h2 style={{ color: "#fff" }}>Shubham Kumar</h2>
                <h6 style={{ color: "#fff" }}>
                  I am a full stack developer with node.js and I seeking
                  challenges related to web development where I can work on real
                  life projects, enhance my knowledge and put my 100 % in
                  organization’s growth . Currently I am learning mern stack
                  development. We are team of 4 member developed a personal
                  website based on affiliate marketing currently hosted on
                  Heroku{" "}
                  <a href="http://theshopperking.herokuapp.com/">
                    The Shopper King
                  </a>{" "}
                  .
                </h6>
                <h5 style={{ color: "#fff" }}>
                  I would like to thank my friend E.Ajay Bharath .
                </h5>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default AboutUsPage;
