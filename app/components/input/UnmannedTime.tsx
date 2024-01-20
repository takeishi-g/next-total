import { useState } from "react";
import Input from "./Index";
import tw from "tailwind-styled-components";

export const UnmannedTimeInput = () => {
  const [ time, setTime ] = useState(0.25)

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let cnageValue = Number(e.target.value)
    setTime(cnageValue) 
  }


  return (
    <Container>
      <Label htmlFor="time-input">無人時間 H: </Label>
      <Input id={"time-input"} value={time} type={"number"} min={0} step={0.25} onChange={handleTimeChange}/>
    </Container>
  );
};

export default UnmannedTimeInput;

export const Container = tw.div`
  flex
  gap-2
`

export const Label = tw.label`
  my-auto
`