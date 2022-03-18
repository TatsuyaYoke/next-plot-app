import { FormControl, FormLabel, Switch } from "@chakra-ui/react";

const OriginalSwitch = ({ children, id, value, setValue }) => {

    return (
        <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor={ id } mb='0'>
                { children }
            </FormLabel>
            <Switch
                id={ id }
                colorScheme='teal'
                defaultChecked={ value }
                onChange={()=> setValue(() => !value)}
            />
        </FormControl>
    )
}

export default OriginalSwitch