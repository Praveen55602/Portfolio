"use client";
import { links } from "@/lib/data";
import type { SectionName } from "@/lib/types";
import React, { useState, createContext, use, useContext } from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export default ActiveSectionContextProvider;

//this custom we've created to deal with the context value being null, whenever we use the context, typescript gives error saying that context can return null values- values can be null if the context is used outside the Provider element tag
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context == null) {
    throw new Error(
      "Use ActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
