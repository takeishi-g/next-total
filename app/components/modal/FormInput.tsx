import { useState } from "react";
import Modal from "react-modal";
import type { ButtonStyle } from "@/types";
import Button from "../button/Index";
import { title } from "process";
import InputFormContainer from "../container/InputFormList";
import ModalContainer from "../container/Modalcontainer";
import DrowIndexInput from "../input/DrowIndex";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "90%",
    height: "90%"
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.7)",
  },
};

const styles: ButtonStyle = {
  backGround: "bg-cyan-600",
  hoverBackgrount: "hover:opacity-80",
  boxShadow: "shadow-lg",
  hoverBoxshadow: "hover:shadow-sm",
  text: "text-white",
  fontSize: "text-xs",
  padding: "p-2",
}



Modal.setAppElement("#main");

export const FormInputModal = (
) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <Button onClick={openModal} title={"図面を追加する"} styles={styles} />
      <Modal isOpen={modal} style={customStyles}>
        <DrowIndexInput />
        <ModalContainer />
        <button onClick={closeModal}>閉じる</button>
      </Modal>
    </>
  );
};

export default FormInputModal;
