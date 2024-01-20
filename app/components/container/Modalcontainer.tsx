import { useState } from "react"
import { InputFormList } from "./InputFormList"


export const ModalContainer = () => {
  const [ formList, setFormList ] = useState([<InputFormList />])
  return (
    <ol>
      <InputFormList />
    </ol>
  )
}

export default ModalContainer