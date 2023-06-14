import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderButton from './Slider-button';
import {ReactComponent as ArrowLeft} from '../assets/svg/Arrow-left.svg';
import {ReactComponent as ArrowRight} from '../assets/svg/Arrow-right.svg';
import Product from './Product';

function CustomSlider(props) {
  const { onClick, products } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 1,
    adaptiveHeight: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      }
    ],
    nextArrow: 
    <SliderButton onClick={onClick} currentClass="right-0">
      <ArrowRight />
    </SliderButton>,
    prevArrow: 
      <SliderButton onClick={onClick} currentClass="left-0">
        <ArrowLeft />
      </SliderButton>
  };

  return (
    <div>
      <Slider {...settings}>
        {products && products.map((product) => (
            <Product 
              key={product.id}
              product={product}
            />
          ))}
      </Slider>
    </div>
  );
}

export default CustomSlider;
