import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Slide from './slide/Slide';

import numberOne from './../../assets/img/number-1.svg';
import numberTwo from './../../assets/img/number-2.svg';
import numberThree from './../../assets/img/number-3.svg';


function SsimpleSwiper() {
    const params = {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30
      }

    return (
        
        // <Swiper>
        //     <>
        //     <div>
        //         <Slide imgNumber={numberOne} qustionText="Где встречаемся?" placeName="Москва" />
        //     </div>
        //     <div>
        //         <Slide imgNumber={numberTwo} qustionText="Время съемки" placeName="3 часа" />
        //     </div>
        //     <div>
        //         <Slide imgNumber={numberThree} qustionText="Мест осталось:" placeName="2 места" />
        //     </div>
        //     </>

        // </Swiper>

        
        );
    };

export default SsimpleSwiper;