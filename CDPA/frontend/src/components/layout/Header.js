import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../Predictions/Form';
import { logout } from '../../actions/auth';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle
} from 'mdbreact';
import './Header.css';

class Header extends Component {
  state = {
    collapsed: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed
    });
  };

  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }

  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <MDBDropdownMenu className="dropdown-default" right>
        <MDBDropdownItem>{user ? `${user.username}` : ''}</MDBDropdownItem>
        <MDBDropdownItem onClick={this.props.logout} >Logout</MDBDropdownItem>
      </MDBDropdownMenu>
    );

    const guestLinks = (
      <MDBDropdownMenu className="dropdown-default" right>
        <MDBNavLink className='grey-text' to='/login'>Login</MDBNavLink>
        <MDBNavLink className='grey-text' to='/register'>Register</MDBNavLink>
      </MDBDropdownMenu>
    );

    const authButton = (
      <div>
        <Form />
      </div>
    );

    const guestButton = (
      <MDBBtn color='white'>
        <MDBNavLink to='register'>Sign Up</MDBNavLink>
      </MDBBtn>
    );

    const { collapsed } = this.state;

    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id='apppage'>
        <div>
          <MDBNavbar
            color='primary-color'
            dark
            expand='md'
            fixed='top'
            scrolling
            transparent
          >
            <MDBContainer>
              <MDBNavbarBrand>
                <MDBIcon icon="home" className="white-text" >CropDoc</MDBIcon>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.handleTogglerClick} />
              <MDBCollapse isOpen={collapsed} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="#!">
                      <MDBIcon icon="signal" className="mr-1" />Solution</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="#!">
                      <MDBIcon icon="users" className="mr-1" />Team</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <MDBIcon icon="user" className="mr-1" />Profile
                        </MDBDropdownToggle>
                      {isAuthenticated ? authLinks : guestLinks}
                    </MDBDropdown>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {collapsed && overlay}
        </div>
        <MDBView>
          <MDBMask className='white-text gradient' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='d-flex justify-content-center white-text align-items-center'
          >
            <MDBRow>
              <MDBCol md='6' className='text-center text-md-left mt-xl-5 mb-5'>
                <MDBAnimation type='fadeInLeft' delay='.3s'>
                  <h1 className='h1-responsive font-weight-bold mt-sm-5'>
                    Healthy Crops, More for you!!
                  </h1>
                  <hr className='hr-light' />
                  <h6 className='mb-4'>
                    CropDoc helps farmers better diagnose their plants for pests and
                    diseses. Sign up and enjoy a three months free subscription.
                  </h6>
                  {isAuthenticated ? authButton : guestButton}
                </MDBAnimation>
              </MDBCol>

              <MDBCol md='6' xl='5' className='mt-xl-5'>
                <MDBAnimation type='fadeInRight' delay='.3s'>
                  <img
                    src='https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png'
                    alt=''
                    className='img-fluid'
                  />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);