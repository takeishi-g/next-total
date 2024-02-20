import React from "react";
import { Styled } from "./style";


export const ButtonAddRow = ({...props}) => {
  console.log(props)
return (
  <Styled {...props} title="追加"/>
)
}

export default ButtonAddRow