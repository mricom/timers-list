import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

export default function CustomModal(props) {

  return (
    <Modal
      centered
      autoFocus={false}
      scrollable
      size=""
      toggle={props.toggle}
      isOpen={props.isOpen}
    >
      <ModalHeader toggle={props.toggle}>{props.modalHeader}</ModalHeader>
      <ModalBody>{props.modalBody}</ModalBody>
      <ModalFooter>{props.modalFooter}</ModalFooter>
    </Modal>
  );
}
