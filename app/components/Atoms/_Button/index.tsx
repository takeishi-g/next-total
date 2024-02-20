import { FC } from "react"
import styled from "styled-components"

type Props = {
  title?: string
  className?: string
  onClick?: () => void
}

export const ButtonDefault:FC<Props> = ({ ...props }) => {
  return (
    <button {...props}>
      {props.title}
    </button>
  )
}

export default ButtonDefault

