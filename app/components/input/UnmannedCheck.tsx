import Input from "./Index";
import tw from "tailwind-styled-components";

export const UnmannedCheck = () => {
  return (
    <Container>
      <Label htmlFor="unmanned-check">無人: </Label>
      <Input id={"unmanned-check"} type={"checkbox"} />
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