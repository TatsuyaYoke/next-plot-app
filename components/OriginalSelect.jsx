import { Select } from "chakra-react-select"

const OriginalSelect = ({ id, color, width, height, options, isMulti, setValue }) => {

    const onChange = (selectedOption) => {
        if (Array.isArray(selectedOption)) {
            setValue(selectedOption)
        } else {
            setValue([selectedOption])
        }
    }
    
    return (
        <>
            <Select
                instanceId={ id }
                size='sm'
                width={ width }
                height={ height }
                isMulti={ isMulti }
                options={ options }
                placeholder=''
                focusBorderColor={ color }
                onChange={ onChange } 
                chakraStyles={{
                    valueContainer: (provided) => ({
                        ...provided,
                        minHeight: height,
                    }),
                    control: (provided) => ({
                        ...provided,
                        borderRadius: '0.375rem',
                        width: width 
                    }),
                    container: (provided) => ({
                        ...provided,
                        width: width
                    })
                }}
            />
        </>
    ) 
}

export default OriginalSelect