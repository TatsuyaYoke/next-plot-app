import OriginalSwitch from '../OriginalSwitch'
import { useRecoilState } from 'recoil'
import { isStoredState } from '../atoms/PlotSettingAtom'

const IsStoredSwitch = () => {
  const [isStored, setIsStored] = useRecoilState(isStoredState)

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
