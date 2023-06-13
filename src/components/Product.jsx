import productBg from '../assets/image/bg.png';
import icon from '../assets/svg/Icon.svg';
import Rating from './Rating';
import {numberFormat} from "../utils";

function Product({product}) {
    return (
      <div className="w-[256px] mr-7 last:mr-0 flex flex-col items-center text-smc font-normal rounded overflow-hidden relative">
        <div className="w-[256px] relative z-30">
          <img className="mx-auto" src={icon} alt="Product icon" />
          <div className="mx-4">
            <h2 className="max-w-[120px] mx-auto mb-7 text-lgc font-normal text-grey-dark text-center">
              {product.title}
            </h2>
            <div className="mb-2 flex text-lmc font-light justify-center text-grey-medium">
              <Rating />
              <span>{product.reviews}</span>
              <span>Reviews</span>
            </div>
            <div className="w-10 h-[1px] mb-2 bg-grey-extra-light mx-auto"></div>
            <p className="mb-7 text-lgc font-normal text-grey-dark text-center">
              {product.description}
            </p>
            <div className="mb-2 text-center">
              <span className="text-2lgc text-grey-medium font-light">from</span>
              <span className="text-2lgc text-grey-dark font-bold">{numberFormat(product.price)}</span>
              <span className="text-2lgc text-grey-medium font-light">/year</span>
            </div>
          </div>
          <div className="flex flex-col items-center mb-[30px]">
            <button className="w-[224px] h-[48px] mb-2 border-2 rounded border-green-light text-lgc font-normal pointer bg-green-light text-white">
              Learn More
            </button>
            <button className="w-[224px] h-[48px] border-2 rounded border-green-light text-lgc font-normal pointer text-green-light">
              Learn More
            </button>
          </div>
        </div>
        <img className="[256px] scale-120 absolute left-0 top-16 z-20" src={productBg} alt='background'></img>
        <div className="w-full h-1 bg-green-light z-40"></div>
      </div>
    )
  }
    
  export default Product;