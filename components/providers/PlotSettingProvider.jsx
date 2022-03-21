import { createContext, useState } from 'react'

export const PlotSettingContext = createContext({})

export const PlotSettingProvider = (props) => {
  const { children } = props
  const [isStored, setIsStored] = useState(false)

  return (
    <PlotSettingContext.Provider value={{ isStored, setIsStored }}>
      {children}
    </PlotSettingContext.Provider>
  )
}
