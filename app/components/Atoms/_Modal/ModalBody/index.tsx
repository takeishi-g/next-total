import React, { useState } from "react";
import Modal from "react-modal";
import ModalCloseButton from "../../../Molecules/Button_ModalClose";
import ModalOpenButton from "../../../Molecules/Button_ModalOpen";
import { customModalStyles, ModalContainer } from "./style";


Modal.setAppElement("#main");

export const ModalBody = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

 
  return (
    <>
      <ModalOpenButton onClick={openModal} title={"入力"}/>
      <Modal isOpen={modal} style={customModalStyles}>
        <ModalContainer>
          {children}
          <ModalCloseButton onClick={closeModal} children={"Close"}/>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default ModalBody;



