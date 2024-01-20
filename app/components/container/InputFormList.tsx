import { FC, useState } from "react";
import NameSelect from "../select/Name";
import DrowIndexInput from "../input/DrowIndex";
import TaskSelect from "../select/Task";
import tw from "tailwind-styled-components";
import UnmannedCheck from "../input/UnmannedCheck";
import TimeInput from "../input/Time";
import UnmannedTimeInput from "../input/UnmannedTime";

export const InputFormList = () => {
  return (
      <li className="flex">
        <TaskSelect />
        <UnmannedCheck />
        <TimeInput />
        <UnmannedTimeInput />
        <NameSelect />
      </li>
  );
};

export default InputFormList;

export const Container = tw.ol`
  flex
  container
  justify-between
`;

