// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import './MapSlider.scss';

import Slide from './slide/Slide';

import numberOne from './../../assets/img/number-1.svg';
import numberTwo from './../../assets/img/number-2.svg';
import numberThree from './../../assets/img/number-3.svg';


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);




function MapSlider() {
  return (
    <div className="container">
       <div className="wrapper">
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true}}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
        <SwiperSlide>
          <Slide imgNumber={numberOne} qustionName="Где встречаемся?" placeName="Москва" />
          </SwiperSlide>
        <SwiperSlide>
          <Slide imgNumber={numberTwo} qustionName="Время съемки" placeName="3 часа" />
          </SwiperSlide>
        <SwiperSlide>
          <Slide imgNumber={numberThree} qustionName="Мест осталось:" placeName="2 места" />
        </SwiperSlide>
      
    </Swiper>
    </div>
    </div>
   
        );
    };

export default MapSlider;


