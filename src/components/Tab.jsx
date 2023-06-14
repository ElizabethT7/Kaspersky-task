//import { ReactComponent as Img} from 'icon';

function Tab({title, setActive, border, id, icon, checkClass}) {

  const onHandleClick = (e) => {
    setActive(+e.target.dataset.index);
  }

  return (
    <div className={border} data-index={id} onClick={onHandleClick}>
      <img className="mx-auto mb-2 text-grey-dark dark:text-white" src={icon} alt='Tab image' data-index={id}></img>
      <p className={checkClass} data-index={id}>{title}</p>
    </div>
  )
}
  
export default Tab;

//      <div class="w-[88px] h-[69px] no-repeat bg-[url('src/assets/svg/tag-all.svg')]"></div>