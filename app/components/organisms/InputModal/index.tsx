import { useState } from "react";
import ModalBody from "../../Atoms/_Modal/ModalBody";
import ButtonAddRow from "../../Molecules/Button_AddFormRow";
import InputList from "../../Molecules/InputList";
import InputForm from "../InputForm";
import UpdateListButton from "../../Molecules/Button_UpdateList";
import InputTotalButton from "../../Molecules/Button_InputTotal";

export type Input = {
  id: number
  task: string
  unmanned:boolean
  time: number
  worker: string
}

let initialId = 1

export const InputModal = () => {

  const [inputList, setInputList] = useState<Input[]>([]);

  const [drowNum, setDrowNum] = useState(1);
  

  const [input, setInput] = useState({
    id: initialId,
    task: "DR",
    unmanned: false,
    time: 0.25,
    worker: "中村",
  });



  const [ isUpdate, setIsUpdate ] = useState(false)

  const handleAddList = () => {
    setInputList([ ...inputList, input ])
    initialId++
    setInput({ ...input, id: initialId, task: "DR", unmanned: false, time: 0.25, worker: "中村" })
  }

  

  const handleChangeDrowNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDrowNum(Number(e.target.value));
  };

  const handleChangeTask = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInput({ ...input, task: e.target.value });
  };

  const handleClickChack = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, unmanned: e.target.checked });
  };

  const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, time: Number(e.target.value) });
  };

  const handleChangeWorker = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInput({ ...input, worker: e.target.value });
  };

  const handleGetNowInout = (id: number, task: string, unmanned: boolean, time: number, worker: string) => {
    setInput({ ...input, id: id, task: task, unmanned: unmanned, time: time, worker: worker })
    setIsUpdate(true)
  }

  const handleListUpdate = () => {
    setInputList((inputList) => inputList.map((row) => (row.id === input.id ? {id: row.id, task: input.task, unmanned: input.unmanned, time: input.time, worker: input.worker} : row)))
    setInput({ ...input, id: initialId, task: "DR", unmanned: false, time: 0.25, worker: "中村" })
    setIsUpdate(false)
  }

  const handleDeleteInputList = (id: number) => {
    setInputList(inputList.filter((row) => row.id !== id))
    // setInput({ ...input, id:id })
  }

  const DrowNumProps = {
    type: "number",
    value: drowNum,
    min: "0",
    defaultValue: 1,
    onChange: handleChangeDrowNum,
  };

  const SelectTaskProps = {
    value: input.task,
    onChange: handleChangeTask,
  };

  const CheckUnmannedProps = {
    type: "checkbox",
    checked: input.unmanned,
    onChange: handleClickChack,
  };

  const InputTimeProps = {
    type: "number",
    value: input.time,
    step: 0.25,
    min: "0",
    onChange: handleChangeTime,
  };

  const SelectWorkerProps = {
    value: input.worker,
    onChange: handleChangeWorker,
  };

  const InputDelete= {
    title: "🗑️",
    onClick: handleDeleteInputList,
  }

  const InputUpdate = {
    title: "🖊️",
    onClick: handleGetNowInout
  }

  const InputListProps  = {
    inputList: inputList,
    inputDelete: InputDelete,
    inputUpdate: InputUpdate,
  };


  const InputFromProps = {
    drowProps: DrowNumProps,
    taskProps: SelectTaskProps,
    checkProps: CheckUnmannedProps,
    timeProps: InputTimeProps,
    workerProps: SelectWorkerProps,
  };

  const InputTotalProps = {
    title: "決定"
    
  }


  console.log(inputList)
  return (
    <ModalBody>
      <>
      { isUpdate ? <UpdateListButton onClick={handleListUpdate}/> : <ButtonAddRow onClick={handleAddList}/> }
        <InputForm {...InputFromProps} />
      </>
      <InputList {...InputListProps} />
      <InputTotalButton { ...InputTotalProps }/>
    </ModalBody>
  );
};

export default InputModal;
