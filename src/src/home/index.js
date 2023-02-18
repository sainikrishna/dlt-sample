import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import Trade from "../trade";

const Home = (props) => {
    const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="home">
        <h3 className="text-center pt-4">Sample App</h3>
        <p className="mb-5 text-center">Using React JS with Bootstrap</p>
      <div className="d-flex home justify-content-center align-items-center mt-md-5">
        <Row className="col-md-6 justify-content-center mx-4">
          <Col onClick={() => setShowPopup(true)} md={4} className="bg-color-light rounded shadow p-5 cursor-pointer mb-4 fw-bold">1. Open Trade Pop-up</Col>
          <Col md={1} className=""></Col>
          <Col md={4} className=""><a className="text-decoration-none" href="#/tranche"><Col  className="bg-color-light rounded shadow p-5 cursor-pointer mb-4 fw-bold">2. Collection of form data</Col></a></Col>
        </Row>
      </div>
      <Trade modal={showPopup} setModal={setShowPopup} />
    </div>
  );
};

export default Home;
