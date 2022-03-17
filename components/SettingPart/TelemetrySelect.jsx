import { VStack, Text, Flex, IconButton, Box } from "@chakra-ui/react"
import { SmallCloseIcon, AddIcon } from "@chakra-ui/icons"
import OriginalSelect from "../OriginalSelect"
import OriginalSwitch from "../OriginalSwitch"

const TelemetrySelect = () => {
    
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
    
    const add = () => {
        console.log('add')
    }

    return (
        <VStack>
            <Flex w='100%'>
                <Text fontWeight={600}>Choose telemeries</Text> 
            </Flex>
            <OriginalSwitch id='is-multi'>
                isMulti? 
            </OriginalSwitch>
            <Flex w='100%' alignItems='center'>
                <OriginalSelect
                    id='tlm'
                    color='teal.500'
                    width='100%'
                    height='40px'
                    options={tlmNamesOptions}
                    isMulti={false}
                />
                <IconButton
                    variant='outline'
                    colorScheme='teal'
                    fontSize='15px'
                    size='xs'
                    icon={<SmallCloseIcon />}
                    mx={2}
                />
            </Flex>
            <Flex w='100%' justifyContent='right'> 
                <IconButton
                    colorScheme='teal'
                    size='xs'
                    onClick={add}
                    icon={<AddIcon/>}
                    mt={2}
                    mr={2}
                />
            </Flex>
        </VStack>
    )
}

export default TelemetrySelect