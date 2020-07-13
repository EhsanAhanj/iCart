import React, { useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import Register from "../../pages/Register";

const RegisterModal = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} size="lg">
        <ModalBody className="p-0">
          <Register />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default RegisterModal;
