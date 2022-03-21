import { VStack, Text, Flex, IconButton, Box } from '@chakra-ui/react'
import { SmallCloseIcon, AddIcon } from '@chakra-ui/icons'
import OriginalSelect from '../OriginalSelect'
import OriginalSwitch from '../OriginalSwitch'
import { useState, useEffect } from 'react'

const TelemetrySelect = () => {
  console.log('rendring...')
  const [isMulti, setIsMulti] = useState(true)
  const [tlmList, setTlmList] = useState([[null]])

  const tlmNames = ['DATE', 'VOLTAGE', 'CURRENT']

  const tlmNamesOptions = tlmNames.map((element) => {
    return {
      label: element,
      value: element,
    }
  })

  const addTlmList = () => {
    const newTlmList = [...tlmList]
    newTlmList.push([null])
    setTlmList(newTlmList)
  }

  const deleteTlmList = (index) => {
    const tlmNotEmpty = tlmList.filter((element) => {
      return element.length !== 0
    })
    // if (tlmList.length === 1) return
    if (tlmNotEmpty.length === 1) return
    const newTlmList = [...tlmList]
    // newTlmList.splice(index, 1)
    newTlmList[index] = []
    setTlmList(newTlmList)
  }

  useEffect(() => {
    console.log(tlmList)
  }, [tlmList])

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
        {tlmList.map(
          (element, index) =>
            element.length && (
              <Flex key={`tlm${index}`} w="100%" alignItems="center">
                <OriginalSelect
                  id={`tlm${index}`}
                  color="teal.500"
                  width="100%"
                  height="40px"
                  options={tlmNamesOptions}
                  isMulti={isMulti}
                  value={tlmList}
                  setValue={setTlmList}
                  index={index}
                  defaultValue={element}
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
            )
        )}
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
