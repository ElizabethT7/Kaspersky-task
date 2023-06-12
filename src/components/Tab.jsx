import { useState } from 'react';

function Tab({title, icon, iconActive}) {

  const [active, setActive] = useState(false);
  const handleClick = () => {
    !active ? setActive(true) : setActive(false);
  }

  return (
    <div className="w-[88px] h-[69px] py-3 flex flex-col justify-end text-smc font-normal" onClick={handleClick}>
      <img className="mx-auto mb-2" src={active ? iconActive : icon} alt='Tab image'></img>
      <p className={active ? "text-green-light text-center" : "text-grey-dark text-center"}>{title}</p>
    </div>
  )
}
  
export default Tab;