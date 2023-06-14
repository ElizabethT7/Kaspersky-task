function TabSelect({tabs}) {
  return (
    <select className="w-[312px] h-[48px] mx-auto text-lmc text-grey-medium font-normal">
      <option className="w-full h-[48px] text-lmc" value="" disabled></option>
      {tabs.map((option, index) => (
        <option className="w-full h-[48px] text-lmc text-grey-medium font-normal" value={option.text} key={index}>
          {option.text}
        </option>
      ))}
    </select>
  )
}
export default TabSelect;