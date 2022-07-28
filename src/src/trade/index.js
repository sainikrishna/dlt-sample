import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardTitle,
  Col,
  CardText,
  Card,
  TabContent,
  TabPane,
  Row,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Creation from "./creation";
import Syndi from "./syndi";

const Trade = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  const { modal, setModal } = props;

  const toggle = () => setModal(!modal);

  return (
      <Modal
        scrollable
        centered
        size="xl"
        isOpen={modal}
        toggle={toggle}
        {...props}
      >
        {/* <ModalHeader toggle={toggle}> */}
        <Row className="align-items-center justify-content-between m-3 mb-2 ms-3 border-bottom">
          <Col>
            <Row>
              <Col
                onClick={() => setActiveTab(0)}
                className={`width-unset flex-unset px-4 py-2 cursor-pointer fw-bold rounded-top ${
                  activeTab === 0 ? "bg-color-primary text-light" : ""
                }`}
              >
                253 - A3 Creatin
              </Col>
              <Col
                onClick={() => setActiveTab(1)}
                className={`width-unset flex-unset px-4 py-2 cursor-pointer fw-bold rounded-top ${
                  activeTab === 1 ? "bg-color-primary text-light" : ""
                }`}
              >
                394 - ST - Syndi
              </Col>
            </Row>
          </Col>
          <Col className="width-unset flex-unset cursor-pointer -mt-4">
            <i class="fa-solid fa-xmark text-secondary"></i>
          </Col>
          <div className="bottom-border" />
        </Row>
        {/* </ModalHeader> */}
        <ModalBody>
            {activeTab ? <Syndi/> : <Creation/>}
        </ModalBody>
      </Modal>
  );
};

export default Trade;
