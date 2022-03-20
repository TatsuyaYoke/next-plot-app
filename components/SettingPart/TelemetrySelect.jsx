import { VStack, Text, Flex, IconButton, Box } from "@chakra-ui/react"
import { SmallCloseIcon, AddIcon } from "@chakra-ui/icons"
import OriginalSelect from "../OriginalSelect"
import OriginalSwitch from "../OriginalSwitch"
import { useState, useEffect } from "react"

const TelemetrySelect = () => {
    console.log('rendring...')
    const [isMulti, setIsMulti] = useState(false)
    const [tlmList, setTlmList] = useState([[]])
    const [tlm, setTlm] = useState([])

    const tlmNames = [
        'DATE',
        'PCDU_BAT_VOLTAGE',
        'PCDU_BAT_CURRENT'
    ]
    
    const tlmNamesOptions = tlmNames.map((element) => {
        return {
            label: element,
            value: element
        }
    })
    
    const addTlmList = () => {
        const newTlmList = [...tlmList]
        newTlmList.push([])
        setTlmList(newTlmList)
    }
    
    const deleteTlmList = (index) => {
        const newTlmList = [...tlmList]
        newTlmList.splice(index, 1)
        setTlmList(newTlmList)
    }

    useEffect(() => {
        console.log(tlm)
    }, [tlm])

    return (
        <VStack>
            <Flex w='100%'>
                <Text fontWeight={600}>Choose telemeries</Text> 
            </Flex>
            <OriginalSwitch
                id='is-multi'
                value={ isMulti }
                setValue={ setIsMulti }
            >
                isMulti? 
            </OriginalSwitch>
            <p>{isMulti ? 'true' : 'false'}</p>
            <VStack w={'100%'}> 
                {
                    tlmList.map((element, index) => (
                        <Flex
                            key={`tlm${index}`}
                            w='100%'
                            alignItems='center'
                        >
                            <OriginalSelect
                                id={`tlm${index}`}
                                color='teal.500'
                                width='100%'
                                height='40px'
                                options={ tlmNamesOptions }
                                isMulti={ isMulti }
                                setValue={ setTlm }
                            />
                            <IconButton
                                variant='outline'
                                colorScheme='teal'
                                fontSize='15px'
                                size='xs'
                                icon={<SmallCloseIcon />}
                                mx={2}
                                onClick={ () => deleteTlmList(index) }
                            />
                        </Flex>
                    ))
                }
            </VStack>
            <Flex w='100%' justifyContent='right'> 
                <IconButton
                    colorScheme='teal'
                    size='xs'
                    icon={<AddIcon/>}
                    mt={2}
                    mr={2}
                    onClick={() => addTlmList() }
                />
            </Flex>
        </VStack>
    )
}

export default TelemetrySelect