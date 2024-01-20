import { HTMLInputTypeAttribute } from "react"

export type InputType = {
  type:  HTMLInputTypeAttribute 
}

export type NameSelectType = {
  value: string[]
  id: string
  name: string
}

export type ButtonProps = {
  styles: {
    backGround: "bg-cyan-600" | "bg-rose-600"
    hoverBackgrount: "hover:opacity-80"
    boxShadow: "shadow-lg"
    hoverBoxshadow: "hover:shadow-sm"
    text: "text-white"
    fontSize: "text-xs"
    padding: "p-2"

  }
  title: string
  onClick?: () => void
}