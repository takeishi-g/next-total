import { OptionType } from "@/types";
import { FC, useState } from "react";
import ReactSelect, { ActionMeta } from "react-select";

import tw from "tailwind-styled-components";

type Props = {
  onChange: (option: OptionType | null ) => void
  value?: string
}



const options = [
  { value: "DR", label: "DR" },
  { value: "W", label: "W" },
  { value: "MC", label: "MC" },
  { value: "細穴", label: "細穴" },
];



export const TaskSelect:FC<Props> = ({ onChange, value }) => {


  return (
    <Container>
      <label htmlFor="task-select" className="my-auto flex-shrink-0">工程: </label>
      <ReactSelect
        id="task-select"
        className="my-auto"
        options={options}
        placeholder={value}
        onChange={onChange}
      />
    </Container>
  );
};

export default TaskSelect;

export const Container = tw.div`
  flex
  gap-2
`