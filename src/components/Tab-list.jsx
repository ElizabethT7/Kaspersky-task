import { useState } from 'react';
import Tab from './Tab';

function TabList({tabs}) {
  return (
    <div className="flex">
      {tabs && tabs.map((tab) => (
        <Tab 
          key={tab.id}
          title={tab.text}
          icon={tab.icon}
          iconActive={tab.iconActive}
        />
      ))}
    </div>
  )
}
    
  export default TabList;