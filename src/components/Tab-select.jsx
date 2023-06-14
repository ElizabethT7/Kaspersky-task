function TabSelect({tabs}) {

  return (
    <select>
      <option value="" disabled></option>
      {tabs.map((option, index) => (
        <option value={option.text} key={index}>
          {option.text}
        </option>
      ))}
    </select>
  )
}
export default TabSelect;