import React from "react"
import ModalBody from "./ModalBody"
import { styled } from "styled-components"

export const InputModal = () => {
return (
  <ModalBody>
    <ModalTitle>Input Modal</ModalTitle>
  </ModalBody>
)
} 

export default InputModal


const ModalTitle = styled.div`
  text-align: center;
`