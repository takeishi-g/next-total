import { FC } from "react"
import { StyledButton }  from "./style"


type Props = {
  title?:string
  onClick?: () => void
  className?: string
}

export const ModalOpenButton:FC<Props> = ({ title, ...rest}) => {
  return (
    <StyledButton {...rest} title={title}/>
  )
}

export default ModalOpenButton

