import { useState } from "react"
import Modal from "react-modal"
import type { ButtonProps } from "@/types"
import PopUpInputButton from "../button/PopUp_InputModal"

const customStyles = {
  content: {
  top: "20%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)",
  minWidth: "40%",
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.7)'
  },
}

type Props = {
  children: JSX.Element | JSX.Element[]
  title: string
}

Modal.setAppElement("#main")
export const ModalComponent = ({ children, title }: Props, {styles}: ButtonProps) => {
  const [ modal, setModal ] = useState(false)

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
    <PopUpInputButton onClick={openModal}/>
    {/* <button onClick={openModal}>{title}</button> */}
    <Modal isOpen={modal} style={customStyles}>
      {children}
      <button onClick={closeModal}>閉じる</button>
    </Modal>
    </>
  )
}

export default Modal