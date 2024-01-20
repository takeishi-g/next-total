import React, { FC, useState } from "react";
import NameSelect from "../select/Name";
import TaskSelect from "../select/Task";
import tw from "tailwind-styled-components";
import UnmannedCheck from "../input/UnmannedCheck";
import TimeInput from "../input/Time";
import UnmannedTimeInput from "../input/UnmannedTime";
import { OptionType } from "@/types";



export const InputFormList = () => {
const [ task, setTask ] = useState("DR")
const [ check, setCheck ] = useState(false)
const [ time, setTime ] = useState(0.25)
const [ unmannedTime, setUnmannedTime ] = useState(0.25)
const [ name, setName ] = useState("中村")

const [ data, setData ] = useState({
  task: "",
  check: false,
  time: 0,
  unmannedTime: 0,
  name: ""
})

const handleTaskChange = (option: OptionType | null ) => {
  setTask(option!.value)
}

const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setCheck(e.target.checked)
}

const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  let changeValue = Number(e.target.value)
  setTime(changeValue)
} 

const handleUnmannedTime = (e: React.ChangeEvent<HTMLInputElement>) => {
  let changeValue = Number(e.target.value)
  setUnmannedTime(changeValue)
}

const handleNameChange = (option: OptionType | null) => {
  setName(option!.value)
}

console.log(task, time, unmannedTime, name, check)

  return (
      <li className="flex">
        <TaskSelect onChange={handleTaskChange} value={task}/>
        <UnmannedCheck onChange={handleCheckChange} />
        <TimeInput  onChange={handleTimeChange} value={time}/>
        <UnmannedTimeInput onChange={handleUnmannedTime} value={unmannedTime}/>
        <NameSelect onChange={handleNameChange} value={name}/>
      </li>
  );
};

export default InputFormList;

export const Container = tw.ol`
  flex
  container
  justify-between
`;

