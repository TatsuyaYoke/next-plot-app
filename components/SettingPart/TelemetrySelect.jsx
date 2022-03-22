import { VStack, Text, Flex, IconButton } from '@chakra-ui/react'
import { SmallCloseIcon, AddIcon } from '@chakra-ui/icons'
import OriginalSelect from '../OriginalSelect'
import OriginalSwitch from '../OriginalSwitch'
import { useState } from 'react'

const TelemetrySelect = () => {
  const [isMulti, setIsMulti] = useState(true)
  const [tlmList, setTlmList] = useState([{ id: 1, tlm: [] }])
  const [countList, setCountList] = useState(tlmList[0].id + 1)

  const tlmNames = ['DATE', 'VOLTAGE', 'CURRENT']

  const tlmNamesOptions = tlmNames.map((element) => {
    return {
      label: element,
      value: element,
    }
  })

  const addTlmList = () => {
    const newTlmList = [...tlmList]
    newTlmList.push({ id: countList, tlm: [] })
    setCountList(() => countList + 1)
    setTlmList(newTlmList)
  }

  const deleteTlmList = (index) => {
    if (tlmList.length === 1) return
    const newTlmList = [...tlmList]
    newTlmList.splice(index, 1)
    setTlmList(newTlmList)
  }

  return (
    <VStack>
      <Flex w="100%">
        <Text fontWeight={600}>Choose telemeries</Text>
      </Flex>
      <OriginalSwitch id="is-multi" value={isMulti} setValue={setIsMulti}>
        isMulti?
      </OriginalSwitch>
      <p>{isMulti ? 'true' : 'false'}</p>
      <VStack w={'100%'}>
        {tlmList.map((element, index) => (
          <Flex key={`tlm${element.id}`} w="100%" alignItems="center">
            <OriginalSelect
              id={element.id}
              color="teal.500"
              width="100%"
              height="40px"
              options={tlmNamesOptions}
              isMulti={isMulti}
              value={tlmList}
              setValue={setTlmList}
            />
            <IconButton
              variant="outline"
              colorScheme="teal"
              fontSize="15px"
              size="xs"
              icon={<SmallCloseIcon />}
              mx={2}
              onClick={() => deleteTlmList(index)}
            />
          </Flex>
        ))}
      </VStack>
      <Flex w="100%" justifyContent="right">
        <IconButton
          colorScheme="teal"
          size="xs"
          icon={<AddIcon />}
          mt={2}
          mr={2}
          onClick={() => addTlmList()}
        />
      </Flex>
    </VStack>
  )
}

export default TelemetrySelect
