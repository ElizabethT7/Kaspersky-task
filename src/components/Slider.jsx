import SliderButton from './Slider-button';
import {ReactComponent as ArrowLeft} from '../assets/svg/Arrow-left.svg';
import {ReactComponent as ArrowRight} from '../assets/svg/Arrow-right.svg';
import products from '../assets/cards.json';
import ProductList from '../components/Product-list';

function Slider() {
  return (
    <div className="max-w-mwd mx-auto relative">
      <SliderButton currentClass="left-0">
        <ArrowLeft />
      </SliderButton>
      <ProductList products={products.data} />
      <SliderButton currentClass="right-0">
        <ArrowRight />
      </SliderButton>
      <div className="w-20 mx-auto flex items-center">
        <div className="w-[10px] h-[10px] mx-[5px] rounded-[50%] border border-green-light"></div>
        <div className="w-[10px] h-[10px] mx-[5px] rounded-[50%] border border-green-light"></div>
        <div className="w-[10px] h-[10px] mx-[5px] rounded-[50%] border border-green-light"></div>
        <div className="w-[10px] h-[10px] mx-[5px] rounded-[50%] border border-green-light"></div>
      </div>
    </div>
  )
  }
      
export default Slider;