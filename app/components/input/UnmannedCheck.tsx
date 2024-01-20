import React, { FC } from "react";
import Input from "./Index";
import tw from "tailwind-styled-components";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const UnmannedCheck: FC<Props> = ({ onChange }) => {
  return (
    <Container>
      <Label htmlFor="unmanned-check">無人: </Label>
      <Input id={"unmanned-check"} type={"checkbox"} onChange={onChange} />
    </Container>
  )
}

export default UnmannedCheck

export const Container = tw.div`
flex
gap-2
`

export const Label = tw.label`
  my-auto
`