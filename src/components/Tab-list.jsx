import { useCallback, useState } from 'react';
import Tab from './Tab';

function TabList({tabs}) {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index) => {
    setActiveIndex(index);
  }

  return (
    <div className="flex">
      {tabs && tabs.map((tab) => (
        <Tab 
          key={tab.id}
          id={tab.id}
          title={tab.text}
          icon={activeIndex === tab.id ? tab.iconActive : tab.icon}
          checkClass={activeIndex === tab.id ? "text-green-light text-center" : "text-grey-dark text-center"}
          setActive={handleClick}
        />
      ))}
    </div>
  )
}
    
  export default TabList;