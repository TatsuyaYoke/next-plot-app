import { FormControl, FormLabel, Switch } from "@chakra-ui/react";

const OriginalSwitch = ({ children, id, value, setValue }) => {
    return (
        <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor={ id } mb='0'>
                { children }
            </FormLabel>
            <Switch
                jid={ id }
                colorScheme='teal'
                value={ value } 
                onChange={ setValue }
            />
        </FormControl>
    )
}

export default OriginalSwitch