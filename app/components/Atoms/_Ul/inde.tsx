import { FC } from "react"



export const Ul = ({...props}) => {
  return (
    <ul {...props}>
      {props.children}
    </ul>
  )
}

export default Ul