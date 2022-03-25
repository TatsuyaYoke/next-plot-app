import { VStack, StackDivider } from '@chakra-ui/react'
import PlotButton from './SettingPart/PlotButton'
import IsStoredSwitch from './SettingPart/IsStoredSwitch'
import DayPicker from './SettingPart/DayPicker'
import TestCaseSelect from './SettingPart/TestCaseSelect'
import TelemetrySelect from './SettingPart/TelemetrySelect'
import { useRecoilValue } from 'recoil'
import { isStoredState } from './atoms/PlotSettingAtom'

const PlotSetting = () => {
  const isStored = useRecoilValue(isStoredState)
  console.log(isStored)

  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={3}
      align="stretch"
      w="300px"
      h="100vh"
    >
      <PlotButton />
      <IsStoredSwitch />
      <DayPicker />
      <TestCaseSelect/>
      <TelemetrySelect />
    </VStack>
  )
}

export default PlotSetting
