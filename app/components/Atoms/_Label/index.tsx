import { title } from "process"
import { FC } from "react"

type Props = {
  name: string
  title: string
}

export const LabelDefault:FC<Props> = ({...props}) => {
  return (
    <label htmlFor={props.name}>{props.title}</label>
  )
  }