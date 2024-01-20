import React, { FC, ReactNode, createContext, useState } from 'react'

type Props = {
  children: ReactNode
}

type InitialState = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
}

export const DataContext = createContext<InitialState | null>(null)

export const DataProvider: FC<Props> = ({ children }) => {
  const [name, setName] = useState("")
  return (
    <DataContext.Provider value={{ name, setName }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext