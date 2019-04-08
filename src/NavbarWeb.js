import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
  MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem
} from "mdbreact";
import "./App.css";
var w = window.innerWidth;
var h = window.innerHeight;

class NavbarWeb extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {

    // alert(innerHeight)
    const overlay = (
      <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.toggleCollapse("navbarCollapse")} />
    );
    return (
      <div id="videobackground">
        <Router>
          <div>
            <MDBNavbar dark expand="md" fixed="top">
              <MDBContainer>
                <MDBNavbarBrand>
                  <span className="white-text">MDBNavbar</span>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse")} />
                <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">About</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Features</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Services</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Opinions</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Team</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Contact</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBNavLink to="!#">
                        <MDBIcon fab icon="facebook-f" />
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="!#">
                        <MDBIcon fab icon="twitter" />
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="!#">
                        <MDBIcon fab icon="instagram" />
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapseID && overlay}
          </div>
        </Router>

        <MDBView>
          {/* รูปสไลด์ */}
          <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView >
                  <img className="d-block w-100" style={{ width: w, height: h, }} src="https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 " alt="First slide" />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Light mask</h3>
                  <p>First text</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img className="d-block w-100" style={{ width: w, height: h, }}  src="https://images.pexels.com/photos/1809338/pexels-photo-1809338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Second slide" />
                  <MDBMask overlay="black-strong" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Strong mask</h3>
                  <p>Second text</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img className="d-block w-100" style={{ width: w, height: h, }} src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Third slide" />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Slight mask</h3>
                  <p>Third text</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="4">
                <MDBView>
                  <img className="d-block w-100" style={{ width: w, height: h, }}  src="https://images.pexels.com/photos/2047910/pexels-photo-2047910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Mattonit's item" />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Sopot Beach</h3>
                  <p>Taken june 21th by @mattonit</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
          {/* รูปสไลด์ */}
          
          {/*        
    <MDBMask className="d-flex justify-content-center align-items-center gradient">
      <MDBContainer className="px-md-3 px-sm-0">
        <MDBRow>
          <MDBCol md="12" className="mb-4 white-text text-center">
            <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
              Creative Agency{" "}
            </h3>
            <hr className="hr-light my-4 w-75" />
            <h4 className="subtext-header mt-2 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
              deleniti consequuntur nihil.
            </h4>
            <MDBBtn outline rounded color="white">
              <MDBIcon icon="home" /> Visit us
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBMask> */}
        </MDBView>

        <MDBContainer>
          <MDBRow className="pt-5 pb-4">
            <MDBCol md="12" className="text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default NavbarWeb;