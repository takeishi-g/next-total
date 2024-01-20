import type { ButtonProps } from "@/types";
import Button from "./Index"; 

const ButtonProps: ButtonProps = {
  styles: {
    backGround: "bg-cyan-600",
    hoverBackgrount: "hover:opacity-80",
    boxShadow: "shadow-lg",
    hoverBoxshadow: "hover:shadow-sm",
    text: "text-white",
    fontSize: "text-xs",
    padding: "p-2",
  },
  title: "図番を追加する",
}

type onClickProps = {
  onClick: () => void
}



export const PopUpInputButton = ({onClick}: onClickProps) => {
  return(
    <Button styles={ButtonProps.styles} title={ButtonProps.title} onClick={onClick}/>
  )
}

export default PopUpInputButton