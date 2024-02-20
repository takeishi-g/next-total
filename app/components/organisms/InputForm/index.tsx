import React from "react";
import ButtonAddRow from "../../Molecules/Button_AddFormRow";
import CheckUnmanned from "../../Molecules/Check_Unmanned";
import InputTime from "../../Molecules/Input_Time";
import SelectTask from "../../Molecules/Select_Task";
import SelectWorker from "../../Molecules/Select_Worker";
import { Wrapper } from "./style";
import { InputDrowNum } from "../../Molecules/Input_DrowNum";

export const InputForm = ({...props}) => {
  return (
    <div>
      <InputDrowNum {...props.drowProps}/>
      
      <Wrapper>
        <SelectTask {...props.taskProps} />
        <CheckUnmanned {...props.checkProps} />
        <InputTime {...props.timeProps} />
        <SelectWorker {...props.workerProps} />
      </Wrapper>
    </div>
  );
};

export default InputForm;
