import { useMediaQuery } from "react-responsive";
import Breadcrumb from '../components/Breadcrumb';
import TabList from '../components/Tab-list';
import TabSelect from '../components/Tab-select';
import backgroundImage from '../assets/image/background.png';
import backgroundImageTablet from '../assets/image/background-tablet.png';
import backgroundImageMobile from '../assets/image/background-mobile.png';
import tabs from '../assets/tags.json';
import products from '../assets/cards.json';
import CustomSlider from '../components/CustomSlider';
import Title from '../components/Title';
import Description from '../components/Description';

function ProductPage() {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)"
  });

  return (
    <main className='w-full mb-20 relative'>
      <div className="max-w-[320px] mobile:max-w-[460px] tablet:max-w-[600px] laptop:max-w-[658px] desktop:max-w-swd mx-auto pt-3 relative z-10">
        <Breadcrumb />
        <section className="max-w-[664px] laptop:px-0 w-full mb-2">
          <span className="inline-block mb-12 desktop:mb-6 px-10 bg-yellow-medium rounded-[20px] py-[7.5px] text-lmc mobile:text-xlc font-bold text-grey-dark">
            If you need an Special Offer Block
          </span>
          <Title isMobile={isMobile} />
          <div className="block tablet:hidden desktop:block w-16 h-[1px] bg-[#AEAEAE]"></div>
          <Description isMobile={isMobile}/>
          <div className="flex">
            {isMobile ?
              <TabSelect tabs={tabs.data}/>
              :
              <TabList tabs={tabs.data}/>
            }
          </div>
        </section>
      </div>
      <div className="overflow-x-hidden h-[498px] max-w-[520px] tablet:max-w-[768px] laptop:max-w-[768px] desktop:max-w-mwd mx-[24px] mobile:mx-auto relative z-20">
        <CustomSlider products={products.data}/>
      </div>
      <div className="w-full h-[578px] desktop:h-[658px] absolute right-0 top-0 bg-white dark:bg-grey-dark"></div>
      <picture>
          <source
            media="(max-width: 480px)"
            srcSet={backgroundImageMobile + " 480w"}
            sizes="360px"
          />
          <source
            media="(max-width: 1280px)"
            srcSet={backgroundImageTablet + " 1280w"}
            sizes="408px"
          />
          <source
            srcSet={backgroundImage} 
            sizes="850px"
          />
          <img src={backgroundImage} 
               className="w-[360px] h-[152px] mobile:w-[407px] mobile:h-[420px]
               desktop:w-[850px] desktop:h-[578px] absolute right-0 top-0
               object-contain z-0"
          />
      </picture>
    </main>
  );
}
export default ProductPage;
