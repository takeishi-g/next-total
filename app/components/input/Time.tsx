import React, { FC, useState } from "react";
import Input from "./Index";
import tw from "tailwind-styled-components";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: number
}

export const TimeInput: FC<Props> = ({ onChange, value }) => {
 
  return (
    <Container>
      <Label htmlFor="time-input">加工時間 H: </Label>
      <Input id={"time-input"} value={value} type={"number"} min={0} step={0.25} onChange={onChange}/>
    </Container>
  );
};

export default TimeInput;

export const Container = tw.div`
  flex
  gap-2
`

export const Label = tw.label`
  my-auto
`