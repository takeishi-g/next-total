import { FC } from "react";
import type { Input } from "../../organisms/InputModal";
import InputListDeleteButton from "../Button_InputListDelete";
import InputListUpdate from "../Button_InputUpdate";

type Props = {
  inputList: Input[];
  inputDelete: {
    title: string;
    onClick: (id: number) => void;
  };
  inputUpdate: {
    title: string;
    onClick: (id: number, task: string, unmanned: boolean, time: number, worker: string) => void;
  };
};

export const InputList: FC<Props> = ({ ...props }) => {
  const inputList = props.inputList;
  const inputDelete = props.inputDelete;
  const inputupdate = props.inputUpdate;

  return (
    <>
      <ul>
        {inputList.map((row, i) => {
          if (!row.unmanned) {
            return (
              <li key={row.id}>
                {i + 1}: 工程：{row.task} 加工時間：{row.time} 加工者：{row.worker}
                <InputListUpdate
                  id={row.id}
                  title={inputupdate.title}
                  onClick={() => inputupdate.onClick(row.id, row.task, row.unmanned, row.time, row.worker)}
                />
                <InputListDeleteButton
                  id={row.id}
                  title={inputDelete.title}
                  onClick={() => inputDelete.onClick(row.id)}
                />
              </li>
            );
          } else if (row.unmanned) {
            return (
              <li key={row.id}>
                {i + 1}: 工程：{row.task} (無人) 加工時間：{row.time} 加工者：{row.worker}
                <InputListUpdate
                  id={row.id}
                  title={inputupdate.title}
                  onClick={() => inputupdate.onClick(row.id, row.task, row.unmanned, row.time, row.worker)}
                />
                <InputListDeleteButton
                  id={row.id}
                  title={inputDelete.title}
                  onClick={() => inputDelete.onClick(row.id)}
                />
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default InputList;
