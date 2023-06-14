function SliderButton({ children, currentClass, onClick }) {
  return (
    <div className={currentClass + " hidden w-[56px] h-[56px] rounded-[50%] bg-white mobile:flex items-center justify-center absolute top-[44%] z-50"} onClick={onClick}>
      <div className=" w-[46px] h-[46px] rounded-[50%] bg-green-light flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}
    
export default SliderButton;