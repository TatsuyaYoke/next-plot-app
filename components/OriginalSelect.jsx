import { Select } from "chakra-react-select"

const OriginalSelect = ({ id, color, width, height, options, isMulti }) => {
   return (
      <Select
         instanceId={ id }
         size='sm'
         isMulti={ isMulti }
         options={ options }
         placeholder=''
         focusBorderColor={ color }
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
   ) 
}

export default OriginalSelect