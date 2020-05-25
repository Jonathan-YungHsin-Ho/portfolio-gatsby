import { useState } from "react"

export const useLocalStorage = (key, initialValue) => {
  // if (typeof window !== `undefined`) {
  const [storedValue, setStoredValue] = useState(() => {
    const item =
      typeof window !== `undefined` ? window.localStorage.getItem(key) : null
    return item ? JSON.parse(item) : initialValue
  })

  const setValue = value => {
    setStoredValue(value)
    if (typeof window !== `undefined`) {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }

  return [storedValue, setValue]
  // }
}
