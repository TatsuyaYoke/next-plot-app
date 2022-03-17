import { Checkbox, VStack, Flex, Text } from "@chakra-ui/react"
import { Select } from "chakra-react-select"
import OriginalSelect from "../OriginalSelect"

const TestCaseSelect = () => {

    const testCases = [
        'Flatsat',
        'Initial',
        'Vibration',
        'Shock',
        'Thermal',
        'Final'
    ]
    
    const testCaseOptions = testCases.map((element) => {
        return {
            label: element,
            value: element
        }
    })

    return (
        <VStack>
            <Flex w='100%'> 
                <Checkbox size='lg' colorScheme='teal' mr={2}></Checkbox>
                <Text fontWeight={600}>Choose test cases</Text>
            </Flex>
            <OriginalSelect
                id='test'
                color='teal.500'
                width='100%'
                height='40px'
                options={testCaseOptions}
                isMulti={true}
            />
        </VStack>
    ) 
}

export default TestCaseSelect