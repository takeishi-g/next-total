import { FC } from "react";
import { Styled } from "./style";
import { LabelDefault } from "../../Atoms/_Label";



const options = ["DR", "W", "MC", "細穴"];

export const SelectTask = ({ ...props }) => {
  return (
    <>
      <LabelDefault name="select-task" title="工程："/>
      <Styled {...props} options={options} />
    </>
  );
};

export default SelectTask;
