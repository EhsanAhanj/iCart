import React, { useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import Login from "../../pages/Login";

const LoginModal = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button size="lg" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className} size="lg">
        <ModalBody className="p-0">
          <Login />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginModal;
