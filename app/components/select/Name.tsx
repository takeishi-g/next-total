import { useState } from "react";
import ReactSelect from "react-select";
import tw from "tailwind-styled-components";

const options = [
  { value: "中村", label: "中村" },
  { value: "斉藤", label: "斉藤" },
  { value: "宇田", label: "宇田" },
  { value: "桜井", label: "桜井" },
  { value: "佐々木", label: "佐々木" },
  { value: "笹原", label: "笹原" },
];

export const NameSelect = () => {
  const [name, setName] = useState();

  const handleSelectChange = () => {};

  return (
    <Container>
      <label htmlFor="name-select" className="my-auto flex-shrink-0">名前: </label>
      <ReactSelect
        id="name-select"
        className="w-11/12"
        options={options}
        placeholder={"名前"}
        onChange={handleSelectChange}
      />
    </Container>
  );
};

export default NameSelect;

export const Container = tw.div`
  flex
  gap-2
`