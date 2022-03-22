import { Select } from 'chakra-react-select'

const OriginalSelect = ({
  id,
  color,
  width,
  height,
  options,
  isMulti,
  value,
  setValue,
}) => {
  const onChange = (selectedOption) => {
    const addValue = []
    if (Array.isArray(selectedOption)) {
      addValue.push(selectedOption)
    } else {
      addValue.push([selectedOption])
    }
    const findIndex = value.findIndex((element) => {
      return element.id === id
    })

    value[findIndex].tlm = addValue
    setValue(value)
  }

  return (
    <>
      <Select
        instanceId={`tlm${id}`}
        size="sm"
        width={width}
        height={height}
        isMulti={isMulti}
        options={options}
        placeholder=""
        focusBorderColor={color}
        onChange={onChange}
        chakraStyles={{
          valueContainer: (provided) => ({
            ...provided,
            minHeight: height,
          }),
          control: (provided) => ({
            ...provided,
            borderRadius: '0.375rem',
            width: width,
          }),
          container: (provided) => ({
            ...provided,
            width: width,
          }),
        }}
      />
    </>
  )
}

export default OriginalSelect
