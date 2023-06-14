function Tab({title, setActive, border, id, children, checkClass}) {

  const onHandleClick = (e) => {
    setActive(+e.target.dataset.index);
  }

  return (
    <div className={border} data-index={id} onClick={onHandleClick}>
      {children}
      <p className={checkClass} data-index={id}>{title}</p>
    </div>
  )
}
  
export default Tab;
