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
import axios from "axios";
import { useDispatch } from "react-redux";
import { reserveDrone } from "../../Dronereservation/actions";
import { toast } from "react-toastify";
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
import { useState, useEffect } from "react";
import Slider from "nouislider";
import SectionButtons from "views/index-sections/SectionButtons";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import ReactDatetime from "react-datetime";
import { ToastContainer } from "react-toastify";

const baseUrl = "http://localhost:8081";

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("1");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [username, setUsername] = useState("");

  const [drone1, setDrone1] = useState(false);
  const [drone2, setDrone2] = useState(false);
  const [drone3, setDrone3] = useState(false);

  const [reservations, setReservations] = useState([]);

  const fetchReservations = async () => {
    try {
      const response = await axios.get(baseUrl + "/api/register");
      if (response.status === 200) {
        setReservations(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchReservations(); // 컴포넌트가 마운트될 때 예약 정보 로드
    //... 기존 useEffect 내용
  }, []); // 빈 dependency array로 useEffect 실행 시점을 한 번만(마운트될 때)로 설정

  const dispatch = useDispatch();
  const [popup, setPopup] = useState({
    open: false,
    title: "",
    message: "",
    callback: false,
  });

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const submitReservation = async () => {
    // 드론 타입 결정
    let droneType;
    if (drone1) droneType = "OUROBOROS_SC14";
    else if (drone2) droneType = "DIVE_4KSC13";
    else if (drone3) droneType = "PUPA_MX13SC15";
    else {
      toast.error("Please select a drone before submitting.");
      return;
    }

    // API 호출
    try {
      const response = await axios.post(baseUrl + "/api/register", {
        username,
        reservationDate: selectedDate + " " + selectedTime,
        droneType,
      });
      if (response.status === 200) {
        toast.success("Reservation submitted successfully.");
        dispatch(reserveDrone(response.data)); // 드론 예약 상태 업데이트 액션 디스패치
        fetchReservations();
      } else {
        toast.error("Failed to submit reservation. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
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
      <ToastContainer />
      <IndexNavbar />
      <ProfilePageHeader />

      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="name">
              <h2 className="title">
                Register Drone <br />
              </h2>
              <h6 className="description">Select drones what you want</h6>
            </div>

            <SectionCarousel />
          </div>

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
                            OUROBOROS_SC14 <br />
                          </h6>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input
                                checked={drone1}
                                defaultValue=""
                                type="checkbox"
                                onChange={() => {
                                  setDrone1(!drone1);
                                  setDrone2(false);
                                  setDrone3(false);
                                }}
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
                            DIVE_4KSC13 <br />
                          </h6>
                        </Col>
                        <Col lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input
                                checked={drone2}
                                defaultValue=""
                                type="checkbox"
                                onChange={() => {
                                  setDrone1(false);
                                  setDrone2(!drone2);
                                  setDrone3(false);
                                }}
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
                            src={require("assets/img/drone3.jpg")}
                          />
                        </Col>
                        <Col lg="7" md="4" xs="4">
                          <h6>
                            PUPA_MX13SC15 <br />
                          </h6>
                        </Col>
                        <Col lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input
                                checked={drone3}
                                defaultValue=""
                                type="checkbox"
                                onChange={() => {
                                  setDrone1(false);
                                  setDrone2(false);
                                  setDrone3(!drone3);
                                }}
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
                        <Col md="10">
                          <InputGroup>
                            <Input
                              placeholder="Username"
                              type="text"
                              onChange={handleUsernameChange}
                              value={username}
                            />
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
                                  placeholder: "Choose your datetime",
                                }}
                                onChange={(value) => {
                                  setSelectedDate(value.format("YYYY-MM-DD"));
                                  setSelectedTime(value.format("HH:mm:ss"));
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
                    <Button
                      className="btn-round"
                      color="success"
                      onClick={submitReservation}
                    >
                      <i className="fa fa-cog" /> Register
                    </Button>
                  </ul>
                </Col>
              </Row>
            </TabPane>

            <TabPane className="text-center" tabId="2" id="following">
              <div>
                {/* 예약 정보 출력 */}
                {reservations.map((reservation, index) => (
                  <div key={index}>
                    <p>DroneType: {reservation.droneType}</p>
                    <p>DateTime: {reservation.reservationDate}</p>
                    <p>Username: {reservation.username}</p>
                    <hr />
                  </div>
                ))}
              </div>
            </TabPane>
          </TabContent>
        </Container>
      </div>
    </>
  );
}

export default ProfilePage;
