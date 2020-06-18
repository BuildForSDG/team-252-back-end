import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";

const Team = () => {
  return (
    <MDBCard className="my-5 px-1 pb-5 text-center">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold my-5">
          Meet the team
          </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          They say behind every successful man is a woman. True. Well,
          behind every successful product is an amazing team.
          </p>
        <MDBRow>
          <MDBCol md="4" className="mb-md-0 mb-5">
            <img
              tag="img"
              src="/static/images/benah.jpg"
              className="rounded z-depth-1-half img-fluid"
              alt="Benah"
            />
            <h4 className="font-weight-bold dark-grey-text my-4">
              Bernard Ngaruiya
              </h4>
            <h6 className="text-uppercase grey-text mb-3">Machine Learning Engineer</h6>
            <MDBBtn tag="a" href="https://www.facebook.com/bngaruiya/" target='blank' floating size="sm" className="mx-1 mb-0 btn-fb">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>
            <MDBBtn
              tag="a"
              href="https://github.com/bngaruiya"
              target="blank"
              floating
              size="sm"
              className="mx-1 mb-0 btn-git"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
            <MDBBtn tag="a" href="https://www.linkedin.com/in/bngaruiya/" target='blank' floating size="sm" className="mx-1 mb-0 btn-li">
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
          </MDBCol>

          <MDBCol md="4" className="mb-md-0 mb-5">
            <img
              tag="img"
              src="/static/images/gor.jpg"
              className="rounded z-depth-1-half img-fluid"
              alt="Gor"
            />
            <h4 className="font-weight-bold dark-grey-text my-4">Cliff Gor</h4>
            <h6 className="text-uppercase grey-text mb-3">
              Front-end Developer
              </h6>
            <MDBBtn
              tag="a"
              href='https://www.facebook.com/gor.clifford'
              target='blank'
              floating
              size="sm"
              className="mx-1 mb-0 btn-fb"
            >
              <MDBIcon icon="facebook-f" />
            </MDBBtn>
            {/* <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn> */}
            <MDBBtn tag="a" href='https://github.com/cliffgor' target='blank' floating size="sm" className="mx-1 mb-0 btn-git">
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </MDBCol>

          <MDBCol md="4" className="mb-md-0 mb-5">
            <img
              tag="img"
              src="/static/images/saringe.jpg"
              className="rounded z-depth-1-half img-fluid"
              alt="Saringe"
            />
            <h4 className="font-weight-bold dark-grey-text my-4">
              Cliff Saringe
              </h4>
            <h6 className="text-uppercase grey-text mb-3">Web Developer</h6>
            {/* <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-li">
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
            <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>
            <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-pin">
              <MDBIcon fab icon="pinterest" />
            </MDBBtn> */}
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Team;