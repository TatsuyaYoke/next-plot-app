import OriginalSwitch from '../OriginalSwitch'
import { useState, useContext } from 'react'
import { PlotSettingContext } from '../providers/PlotSettingProvider'

const IsStoredSwitch = () => {
  // const [isStored, setIsStored] = useState(false)
  const { isStored, setIsStored } = useContext(PlotSettingContext)

  return (
    <>
      <OriginalSwitch id="is-stored" value={isStored} setValue={setIsStored}>
        isStored?
      </OriginalSwitch>
      <p>{isStored ? 'true' : 'false'}</p>
    </>
  )
}

export default IsStoredSwitch
