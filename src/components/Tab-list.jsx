import { useState } from 'react';
import Tab from './Tab';

function TabList({tabs}) {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index) => {
    setActiveIndex(index);
  }

  return (
    <div className="hidden w-[506px] tablet:flex flex-col">
      <div className="w-[506px] flex">
      {tabs && tabs.map((tab) => (
        <Tab 
          key={tab.id}
          id={tab.id}
          title={tab.text}
          icon={activeIndex === tab.id ? tab.iconActive : tab.icon}
          checkClass={activeIndex === tab.id ? "text-green-light text-center" : "text-grey-dark text-center dark:text-white"}
          setActive={handleClick}
        />
      ))}
      </div>
      <div className="block desktop:hidden ml-6 w-[90%]l h-[1px] bg-[#AEAEAE]"></div>
    </div>
  )
}
    
export default TabList;