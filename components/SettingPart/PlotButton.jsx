import { Button } from "@chakra-ui/react"

const PlotButton = () => {
    const plot = () => {
        console.log('Plot')
    }
    return (
       <Button
        colorScheme='teal'
        onClick={plot}
       >
           Plot
       </Button> 
    )
}

export default PlotButton