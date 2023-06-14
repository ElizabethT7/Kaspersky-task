import { useState } from 'react';
import Tab from './Tab';

function TabList({tabs}) {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index) => {
    setActiveIndex(index);
  }

  return (
    <div className="hidden w-[506px] tablet:flex border-b-[#AEAEAE] border-b-2">
      {tabs && tabs.map((tab) => (
        <Tab 
          key={tab.id}
          id={tab.id}
          title={tab.text}
          icon={activeIndex === tab.id ? tab.iconActive : tab.icon}
          checkClass={activeIndex === tab.id ? "text-green-light text-center pointer" : "text-grey-dark text-center dark:text-grey-extra-light desktop:dark:text-white pointer"}
          border={activeIndex === tab.id ? "w-[88px] h-[69px] py-3 flex flex-col justify-end text-smc font-normal text-center border-b-green-light border-b-4 pointer" : "w-[88px] h-[69px] py-3 flex flex-col justify-end text-smc font-normal text-center pointer"}
          setActive={handleClick}
        />
      ))}
    </div>
  )
}
    
export default TabList;