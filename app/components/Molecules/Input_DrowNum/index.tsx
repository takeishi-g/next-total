import React from "react";
import { LabelDefault } from "../../Atoms/_Label";
import { Styled } from "./style";

export const InputDrowNum = ({...props}) => {
  return (
    <>
    <LabelDefault name="input-drow-num" title="図番："/>
    <Styled {...props} />
    </>
  )
}