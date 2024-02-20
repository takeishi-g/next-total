import React, { FC } from "react"


type Props = {
  options?: string[]
  onChange?: () => void
  defaultValue?: string
  classname?: string
}

export const SelectDefault:FC<Props> = ({
  options,
  ...props
}) => {
  return (
    <select {...props}>
      {options!.map((option, i) => {
        return(
          <option value={option} key={i}>{option}</option>
        )
      })}
    </select>
  )
}

export default SelectDefault