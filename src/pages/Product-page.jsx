import Breadcrumb from '../components/Breadcrumb';
import TabList from '../components/Tab-list';
import backgroundImage from '../assets/image/background.png';
import tabs from '../assets/tags.json';
import products from '../assets/cards.json';
import CustomSlider from '../components/CustonSlider';

function ProductPage() {
  return (
    <main className='w-full mb-20 relative'>
      <div className="max-w-swd mx-auto pt-3 relative z-10">
        <Breadcrumb />
        <section className="max-w-[664px] w-[60%] mb-2">
          <span className="inline-block mb-6 px-10 bg-yellow-medium rounded-[20px] py-[7.5px] text-xlc font-bold text-grey-dark">
            If you need an Special Offer Block
          </span>
          <h1 className="mb-6 text-4xlc font-light text-grey-dark dark:text-white"><span className="font-bold">
            Lorem ipsm</span> dolor sit amet
          </h1>
          <div className="w-16 h-[1px] bg-[#AEAEAE]"></div>
          <p className="mb-6 text-lgc font-light text-grey-medium dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut dapibus eleifend mi eu faucibus. Aliquam erat volutpat.
            Pellentesque dui nisl, consectetur sit amet hendrerit at, commodo ac nunc.
          </p>
          <TabList tabs={tabs.data}/>
        </section>
      </div>
      <div className="max-w-mwd mx-auto relative z-20">
        <CustomSlider products={products.data}/>
      </div>
      <div className="w-full h-[658px] absolute right-0 top-0 bg-white dark:bg-grey-dark"></div>
      <img className="w-[850px] h-[578px] absolute right-0 top-0 object-contain z-0" src={backgroundImage} alt="Background image"></img>
    </main>
  );
}
export default ProductPage;
