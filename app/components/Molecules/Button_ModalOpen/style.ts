import ButtonDefault from "../../Atoms/_Button";
import { styled } from "styled-components"

export const StyledButton = styled(ButtonDefault)`
  bottom: 3%;
  right: 3%;
  border: solid 1px #000000;
  border-radius: 2px;
  padding: 8px;
  background-color: #58affa;
  color: #fff;

  &:hover {
    opacity: 0.7;
  }
`


