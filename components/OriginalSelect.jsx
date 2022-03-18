import { Select } from "chakra-react-select"
import { useState } from "react"

const OriginalSelect = ({ id, color, width, height, options, isMulti }) => {

    const [optionList, setOptionList] = useState([])    
    const onChange = (selectedOption) => {
        if (Array.isArray(selectedOption)) {
            setOptionList(selectedOption)
        } else {
            setOptionList([selectedOption])
        }
    }
    
    return (
        <>
            <Select
                instanceId={ id }
                size='sm'
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
            {
                optionList.map((element, index) => {
                        return (
                            <p key={ index }>{ element.value }</p>
                        )
                })
            }
        </>
    ) 
}

export default OriginalSelect