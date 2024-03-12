import Select from 'react-select';

const SelectDropdown = ({ selectedValue, options, setSortValue }) => {

  const handleChange = (selectedOption) => {
    setSortValue(selectedOption)
  };
  const customStyles = {
    placeholder: (provided) => ({
      ...provided,
      color: 'white', 
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white',
    }),
    control: (base, state) => ({
      ...base,
      background: "black",
      borderRadius: "8px",
      borderColor: "white",
      color: "red",
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        borderColor: "white"
      },
      minWidth: '20px',
      width: "180px"
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused
        ? '#282c34'
        : isSelected
          ? '#282c34'
          : undefined,
      zIndex: 1,border:"1px solid white",
      borderColor:"white"
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
      "&:hover": {
        background: "black"
      },
      background: "red",
    }),

    menuList: (base) => ({
      ...base,
      padding: 0,
      background: "black",
      color: "white",
      "&:hover": {
        background: "black"
      }
    })
  };
  return (
    <Select
      styles={customStyles}
      value={selectedValue}
      onChange={handleChange}
      options={options}
      placeholder="Select"
    />
  )
}


export default SelectDropdown