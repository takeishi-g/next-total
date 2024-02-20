import React, { FC } from "react"
import { StyledButton }  from "./style"


type Props = {
  children?:string
  onClick?: () => void
  className?: string
}

export const ModalCloseButton:FC<Props> = ({ children, ...rest}) => {
  return (
    <StyledButton {...rest} title={children}/>
  )
}

export default ModalCloseButton

