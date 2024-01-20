"use client"

import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react'
import tw from 'tailwind-styled-components'

type Props = {
  type?: 'text' | 'number' | 'select'
  onChange: (e: React.ChangeEvent<HTMLInputElement>)  =>  void
  value: string | string[]
}

export const Input: FC<Props> = ({
  type,
  value,
  onChange
}) => {
  return (
    <InputContainer type={type} value={value} onChange={onChange}/>
  )
}

const InputContainer = tw.input`
  border-2
  rounded-md
`



export default Input