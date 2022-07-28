import React from "react";
import { Row } from "reactstrap";
import Negotiation from "./negotiation";
import Orders from "./orders";

const Creation = () => {
  return (
    <Row>
      <Orders />
      <Negotiation />
    </Row>
  );
};

export default Creation;
