"use client";

import { useState } from "react";
import FormInputModal from "../modal/FormInput";


type Data = {
  task: string
  unmanned: boolean
  time: number
  unmannedTime: number
  name: string
}











export const MainContainer = () => {
const [ data, setData ] = useState<Data>(
  {
    task: "",
    unmanned: false,
    time: 0,
    unmannedTime: 0,
    name: "",
  })

  const [ task, setTask ] = useState("")
  const [ unmanned, setUnmanned ] = useState(false)
  const [ time, setTime ] = useState(0.25)
  const [ unmannedTime, setUnmannedTime ] = useState(0.25)
  const [ name, setName ] = useState("")

  const handleChangeTask = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let changeValue = String(e.target.value)
    setTask(changeValue)
    data.task = task
  }
  const handleChangeUnmanned = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changevalue = Boolean(e.target.value)
    setUnmanned(changevalue)
    data.unmanned = unmanned
  }
  const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue = Number(e.target.value)
    setTime(changeValue)
    data.time = time
  }
  const handleChangeUnmannedTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue = Number(e.target.value)
    setUnmannedTime(changeValue)
    data.unmannedTime = unmannedTime
  }
  const handleChangeName = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let changeValue = String(e.target.value)
    setName(changeValue)
    data.name = name
  }

  console.log(data)

  const [ dataList, setDataList ] = useState([])

  return (
    <>
      <FormInputModal />
      
    </>
  );
};

export default MainContainer;
