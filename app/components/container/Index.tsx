"use client";

import { useContext } from "react";
import FormInputModal from "../modal/FormInput";
import { DataProvider } from "../context/context";

export const MainContainer = () => {
  return (
    <DataProvider>
      <FormInputModal />
    </DataProvider>
  );
};

export default MainContainer;
