import { title } from "process"
import React, { FC } from "react"

type Props = {
  name: string
  title: string
}

export const LabelDefault:FC<Props> = ({...props}) => {
  return (
    <label htmlFor={props.name}>{props.title}</label>
  )
  }