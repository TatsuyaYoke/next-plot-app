import { FormControl, FormLabel, Switch } from "@chakra-ui/react";

const OriginalSwitch = ({ children, id }) => {
    return (
        <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor={ id } mb='0'>
                { children }
            </FormLabel>
            <Switch id={ id } colorScheme='teal'/>
        </FormControl>
    )
}

export default OriginalSwitch