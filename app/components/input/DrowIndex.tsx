import { useState } from "react";
import Input from "./Index";
import tw from "tailwind-styled-components";

export const DrowIndexInput = () => {

  const[ drowIndex, setDrowIndex ] = useState("")
  const handleDrowIndexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDrowIndex(e.target.value)
  }

  return (
    <Container>
      <Label htmlFor="drow-index">図番 E: </Label>
      <Input id={"drow-index"} value={drowIndex} onChange={handleDrowIndexChange} type={"number"} min={1}/>
    </Container>
  );
};

export default DrowIndexInput;

export const Container = tw.div`
  flex
  gap-2
`

export const Label = tw.label`
  my-auto
`