import React from "react";
import { Styled } from "./style";
import { LabelDefault } from "../../Atoms/_Label";


const options = ["中村", "斉藤", "宇田", "桜井", "佐々木", "笹原"];

export const SelectWorker = ({ ...props }) => {
  return (
    <>
      <LabelDefault name="select-worker" title="名前：" />
      <Styled {...props} options={options} />
    </>
  );
};


export default SelectWorker