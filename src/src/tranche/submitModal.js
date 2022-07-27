import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from "reactstrap";

const SubmitModal = (props) => {
  const { className, modal, setModal, fields = [] } = props;

  const toggle = () => setModal(!modal);

  const onClose = () => {
    setModal(false)
    props.onClose();
  }

  return (
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>Data Saved</ModalHeader>
      <ModalBody>
        {fields.map((trache, index) => {
          const fieldsArray = Object.keys(trache);
          console.log("SubmitModal fields", trache, fieldsArray);
          return (
            <div className="mb-4">
              <div className="fs-6 fw-bold">Trache {index + 1}:</div>
              <div className="ps-4">
                {fieldsArray.map((field) => (
                  <Row>
                    <Col>
                    {field}
                    </Col>: <Col><span className="fw-bold">{trache[field]}</span></Col>
                  </Row>
                ))}
              </div>
            </div>
          );
        })}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onClose}>
          Close
        </Button>{" "}
      </ModalFooter>
    </Modal>
  );
};

export default SubmitModal;
