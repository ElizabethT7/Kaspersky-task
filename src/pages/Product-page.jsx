import Breadcrumb from '../components/Breadcrumb';
import backgroundImage from '../assets/image/background.png';

function ProductPage() {
  return (
    <main className='w-full relative'>
      <div className="max-w-swd mx-auto pt-3 z-10">
        <Breadcrumb />
        <section className="max-w-swd">

        </section>
        <section className="max-w-swd">

        </section>
      </div>
      <img className="w-[850px] h-[578px] absolute right-0 top-0 object-contain z-0" src={backgroundImage} alt="Background image"></img>
    </main>
  );
}
export default ProductPage;
