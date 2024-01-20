"use client"

import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react'
import tw from 'tailwind-styled-components'

type Props = {
  id: string
  type?: 'text' | 'number' | 'checkbox'
  onChange?: (e: React.ChangeEvent<HTMLInputElement>)  =>  void
  value?: string | string[] | number
  min?: number
  step?: number
}

export const Input: FC<Props> = ({
  id,
  type,
  value,
  onChange,
  min,
  step
}) => {
  return (
    <InputContainer id={id} type={type} value={value} onChange={onChange} min={min} step={step}/>
  )
}

const InputContainer = tw.input`
  border-2
  rounded-md
`



export default Input