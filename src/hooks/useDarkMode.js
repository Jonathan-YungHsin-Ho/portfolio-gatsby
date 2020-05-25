import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"
import { useModeContext } from "../contexts/ModeContext"

export const useDarkMode = initialValue => {
  // if (typeof window !== `undefined`) {
  const [darkMode, setDarkMode] = useLocalStorage("darkModeKey", initialValue)
  const { dispatch } = useModeContext()

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
    dispatch({ type: "SET_MODE", payload: darkMode })
  }, [darkMode, dispatch])

  return [darkMode, setDarkMode]
  // }
}
