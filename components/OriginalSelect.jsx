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
  index,
  defaultValue,
}) => {
  console.log(defaultValue)
  const onChange = (selectedOption) => {
    const newValue = [...value]
    const addValue = []
    if (Array.isArray(selectedOption)) {
      addValue.push(selectedOption)
    } else {
      addValue.push([selectedOption])
    }
    newValue[index] = addValue
    setValue(newValue)
  }

  return (
    <>
      <Select
        instanceId={id}
        size="sm"
        width={width}
        height={height}
        isMulti={isMulti}
        options={options}
        placeholder=""
        focusBorderColor={color}
        defaultValue={[
          { label: 'DATE', value: 'DATE' },
          { label: 'VOLTAGE', value: 'VOLTAGE' },
        ]}
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
