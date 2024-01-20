import type { ButtonProps } from "@/types";
import Button from "./Index"; 

const ButtonProps: ButtonProps = {
  styles: {
    borderColor: "border-b-cyan-800 border-r-cyan-800",
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

export const PopUpInputButton = () => {
  return(
    <Button styles={ButtonProps.styles} title={ButtonProps.title}/>
  )
}

export default PopUpInputButton