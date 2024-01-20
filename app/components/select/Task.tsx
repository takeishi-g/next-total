import { useState } from "react";
import ReactSelect from "react-select";
import tw from "tailwind-styled-components";

const options = [
  { value: "DR", label: "DR" },
  { value: "W", label: "W" },
  { value: "MC", label: "MC" },
  { value: "細穴", label: "細穴" },
];

export const TaskSelect = () => {
  const [task, setTask] = useState(options[0].value);

  const handleSelectChange = () => {}

  return (
    <Container>
      <label htmlFor="task-select" className="my-auto flex-shrink-0">工程: </label>
      <ReactSelect
        id="task-select"
        className="my-auto"
        options={options}
        placeholder={"工程"}
        onChange={handleSelectChange}
      />
    </Container>
  );
};

export default TaskSelect;

export const Container = tw.div`
  flex
  gap-2
`