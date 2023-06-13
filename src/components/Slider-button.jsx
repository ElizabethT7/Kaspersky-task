function SliderButton({ children, currentClass }) {

  const onHandleClick = (e) => {
   console.log(e)
  }
  
  return (
    <div className={currentClass + " w-[56px] h-[56px] rounded-[50%] bg-white flex items-center justify-center absolute top-[44%] z-50"} onClick={onHandleClick}>
      <div className=" w-[46px] h-[46px] rounded-[50%] bg-green-light flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}
    
export default SliderButton;