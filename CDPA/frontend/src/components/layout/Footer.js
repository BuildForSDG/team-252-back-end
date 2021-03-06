import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

const Footer = () => {
  return (
    <div>
      <MDBRow className="d-flex align-items-center">
        <MDBCol md="8" lg="8">
          <p className="text-center text-md-left grey-text">
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="#">CropDoc</a>
          </p>
        </MDBCol>
        <MDBCol md="4" lg="4" className="ml-lg-0">
          <div className="text-center text-md-right">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href='https://github.com/BuildForSDG/team-252-back-end' target='blank' className="btn-floating btn-sm rgba-white-slight mx-1">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href='https://www.facebook.com/groups/249164319589395' target="blank" className="btn-floating btn-sm rgba-white-slight mx-1">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
            </ul>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Footer;