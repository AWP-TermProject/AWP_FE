/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

import Slider from "nouislider";
import SectionButtons from "views/index-sections/SectionButtons";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import ReactDatetime from "react-datetime";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />

      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              {/* <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/joe-gardner-2.jpg")}
              /> */}
            </div>
            <div className="name">
              <h2 className="title">
                Register Drone <br />
              </h2>
              <h6 className="description">Select drones what you want</h6>
            </div>

            <SectionCarousel />
          </div>
          {/* <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <br />
               <Button className="btn-round" color="default" outline>
                <i className="fa fa-cog" /> Settings
              </Button> 
            </Col>
          </Row> */}
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Register
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Register Status
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>

          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/drone1.jpg")}
                          />
                        </Col>
                        <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                          <h6>
                            Flume <br />
                          </h6>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/drone2.jpg")}
                          />
                        </Col>
                        <Col lg="7" md="4" xs="4">
                          <h6>
                            Banks <br />
                          </h6>
                        </Col>
                        <Col lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/drone3.jpg")}
                          />
                        </Col>
                        <Col lg="7" md="4" xs="4">
                          <h6>
                            Compo <br />
                          </h6>
                        </Col>
                        <Col lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>

                    <hr />

                    <li>
                      <Row>
                        <Col md="10">
                          <InputGroup>
                            <Input placeholder="Username" type="text" />
                            <InputGroupAddon addonType="append">
                              <InputGroupText>
                                <i aria-hidden={true} className="fa fa-group" />
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                        </Col>
                      </Row>
                    </li>

                    <br />

                    <li>
                      <Row>
                        <Col md="10">
                          <FormGroup>
                            <InputGroup className="date" id="datetimepicker">
                              <ReactDatetime
                                inputProps={{
                                  placeholder: "Choose your time",
                                }}
                              />
                              <InputGroupAddon addonType="append">
                                <InputGroupText>
                                  <span className="glyphicon glyphicon-calendar">
                                    <i
                                      aria-hidden={true}
                                      className="fa fa-calendar"
                                    />
                                  </span>
                                </InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <Button className="btn-round" color="success">
                      <i className="fa fa-cog" /> Register
                    </Button>
                  </ul>
                </Col>
              </Row>
            </TabPane>

            <TabPane className="text-center" tabId="2" id="following">
              <h3 className="text-muted">Not following anyone yet :</h3>
              <Button className="btn-round" color="warning">
                Find artists
              </Button>
            </TabPane>
          </TabContent>
        </Container>
      </div>
    </>
  );
}

export default ProfilePage;
