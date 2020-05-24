import React, { createContext, useReducer, useContext } from "react"
import { initialModeState, modeReducer } from "../reducers/modeReducer"

const ModeContext = createContext()

export default function ModeProvider({ children }) {
  const [mode, dispatch] = useReducer(modeReducer, initialModeState)

  return (
    <ModeContext.Provider value={{ mode, dispatch }}>
      {children}
    </ModeContext.Provider>
  )
}

export function useModeContext() {
  const context = useContext(ModeContext)
  if (context === undefined) {
    throw new Error("useModeContext must be used within ModeProvider")
  }

  return context
}
