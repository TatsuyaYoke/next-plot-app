import { VStack, Box, Text } from "@chakra-ui/react"
import { useState, useEffect } from 'react'
import { SingleDatepicker } from "chakra-dayzed-datepicker"

const DayPicker = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    
    useEffect(() => {
        if (startDate > endDate) {
            setEndDate(() => startDate)
        }
    }, [startDate, endDate])

    return (
        <VStack spacing={3}>
            <Box width='100%'>
                <Text fontWeight={600}>Start Date</Text>
                <SingleDatepicker
                    date={startDate}
                    onDateChange={setStartDate}
                />
            </Box>
            <Box w='100%'>
                <Text fontWeight={600}>End Date</Text>
                <SingleDatepicker
                    date={endDate}
                    onDateChange={setEndDate}
                />
            </Box>
        </VStack>
    )    
}

export default DayPicker