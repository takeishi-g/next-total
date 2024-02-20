import React from "react";
import { Styled } from "./style";
import { LabelDefault } from "../../Atoms/_Label";

export const CheckUnmanned = ({...props}) => {
  return (
    <>
      <LabelDefault name={"check-unmanned"} title={"無人："}/>
      <Styled {...props} />
    </>
  )
}

export default CheckUnmanned