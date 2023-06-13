function Tab({title, setActive, id, icon, checkClass}) {

  const onHandleClick = (e) => {
    setActive(+e.target.dataset.index);
  }

  return (
    <div className="w-[88px] h-[69px] py-3 flex flex-col justify-end text-smc font-normal" data-index={id} onClick={onHandleClick}>
      <img className="mx-auto mb-2" src={icon} alt='Tab image' data-index={id}></img>
      <p className={checkClass} data-index={id}>{title}</p>
    </div>
  )
}
  
export default Tab;