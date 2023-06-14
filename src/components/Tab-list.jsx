import { useState } from 'react';
import Tab from './Tab';
import { ReactComponent as All } from '../assets/svg/tag-all.svg';
import { ReactComponent as Windows } from '../assets/svg/windows.svg';
import { ReactComponent as MacOS } from '../assets/svg/macOS.svg';
import { ReactComponent as Android } from '../assets/svg/android.svg';
import { ReactComponent as IOS } from '../assets/svg/iOS.svg';
import { ReactComponent as Tools } from '../assets/svg/tools.svg';

const style = {
  "checkClass": "text-grey-dark text-center dark:text-grey-extra-light desktop:dark:text-white pointer",
  "checkClassActive": "text-green-light text-center pointer",
  "border": "w-[89px] h-[72px] py-3 flex flex-col justify-end text-smc font-normal text-center pointer",
  "borderActive": "w-[89px] h-[72px] py-3 flex flex-col justify-end text-smc font-normal text-center border-b-green-light border-b-4 pointer",
  "icon": "mx-auto mb-2 text-grey-dark dark:text-grey-extra-light desktop:dark:text-white",
  "iconActive": "mx-auto mb-2 text-green-light",
}

function TabList({tabs}) {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index) => {
    setActiveIndex(index);
  }

  return (
    <div className="hidden w-[540px] tablet:flex border-b-[#AEAEAE] border-b-2 desktop:border-b-0">
      <Tab id={tabs[0].id}
           title={tabs[0].text}
           checkClass={activeIndex === tabs[0].id ? style.checkClassActive : style.checkClass}
           border={activeIndex === tabs[0].id ? style.borderActive : style.border}
           setActive={handleClick}>
        <All className={activeIndex === tabs[0].id ? style.iconActive : style.icon} 
             data-index={tabs[0].id} />
      </Tab>
      <Tab id={tabs[1].id}
           title={tabs[1].text}
           checkClass={activeIndex === tabs[1].id ? style.checkClassActive : style.checkClass}
           border={activeIndex === tabs[1].id ? style.borderActive : style.border}
           setActive={handleClick}>
        <Windows className={activeIndex === tabs[1].id ? style.iconActive : style.icon} 
                 data-index={tabs[1].id} />
      </Tab>
      <Tab id={tabs[2].id}
           title={tabs[2].text}
           checkClass={activeIndex === tabs[2].id ? style.checkClassActive : style.checkClass}
           border={activeIndex === tabs[2].id ? style.borderActive : style.border}
           setActive={handleClick}>
        <MacOS className={activeIndex === tabs[2].id ? style.iconActive : style.icon} 
               data-index={tabs[2].id} />
      </Tab>
      <Tab id={tabs[3].id}
           title={tabs[3].text}
           checkClass={activeIndex === tabs[3].id ? style.checkClassActive : style.checkClass}
           border={activeIndex === tabs[3].id ? style.borderActive : style.border}
           setActive={handleClick}>
        <Android className={activeIndex === tabs[3].id ? style.iconActive : style.icon} 
                 data-index={tabs[3].id} />
      </Tab>
      <Tab id={tabs[4].id}
           title={tabs[4].text}
           checkClass={activeIndex === tabs[4].id ? style.checkClassActive : style.checkClass}
           border={activeIndex === tabs[4].id ? style.borderActive : style.border}
           setActive={handleClick}>
        <IOS className={activeIndex === tabs[4].id ? style.iconActive : style.icon} 
             data-index={tabs[4].id} />
      </Tab>
      <Tab id={tabs[5].id}
           title={tabs[5].text}
           checkClass={activeIndex === tabs[5].id ? style.checkClassActive : style.checkClass}
           border={activeIndex === tabs[5].id ? style.borderActive : style.border}
           setActive={handleClick}>
        <Tools className={activeIndex === tabs[5].id ? style.iconActive : style.icon} 
               data-index={tabs[5].id} />
      </Tab>
    </div>
  )
}
    
export default TabList;