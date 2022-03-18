import { VStack } from "@chakra-ui/react"
import OriginalSelect from "../OriginalSelect"
import OriginalSwitch from "../OriginalSwitch"
import { useState } from "react"

const TestCaseSelect = () => {
    const [isChoosed, setIsChoosed] = useState(false)
    const toggle = () => {
        setIsChoosed((value) => !value)
    }

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
            <OriginalSwitch
                id='choose-test-cases' 
                value={ isChoosed }
                setValue={ toggle }
            >
                Choose test cases
            </OriginalSwitch>
            <p>{isChoosed ? 'true' : 'false'}</p>
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