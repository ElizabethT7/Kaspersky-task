import Breadcrumb from '../components/Breadcrumb';
import TabList from '../components/Tab-list';
import backgroundImage from '../assets/image/background.png';
import tabs from '../assets/tags.json';

function ProductPage() {
  return (
    <main className='w-full relative'>
      <div className="max-w-swd mx-auto pt-3 relative z-10">
        <Breadcrumb />
        <section className="max-w-[664px] w-[60%]">
          <span className="inline-block mb-6 px-10 bg-yellow-medium rounded-[20px] py-[7.5px] text-xlc font-bold text-grey-dark">
            If you need an Special Offer Block
          </span>
          <h1 className="mb-6 text-4xlc font-light text-grey-dark"><span className="font-bold">Lorem ipsm</span> dolor sit amet</h1>
          <div className="w-16 h-[1px] bg-[#AEAEAE]"></div>
          <p className="mb-6 text-lgc font-light text-grey-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut dapibus eleifend mi eu faucibus. Aliquam erat volutpat.
            Pellentesque dui nisl, consectetur sit amet hendrerit at, commodo ac nunc.
          </p>
          <TabList tabs={tabs.data}/>
        </section>
        <section className="max-w-swd">

        </section>
      </div>
      <img className="w-[850px] h-[578px] absolute right-0 top-0 object-contain z-0" src={backgroundImage} alt="Background image"></img>
    </main>
  );
}
export default ProductPage;
