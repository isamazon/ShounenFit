import React from 'react'
// CSS 
import '../../CSS/landingpage2/heroslider.css'
import '../../CSS/landingpage2/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
// Dependencies
import Slider from 'react-slick'



function Heroslide() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000
      };


    return (
        <div className='slider-container'>
            <Slider  {...settings}>
                <div className="slide-1">
                    <h1>First slide</h1>
                </div>
                <div className="slide-1">
                    <h1>Second slide</h1>
                </div>
                <div className="slide-1">
                    <h1>third slide</h1>
                </div>
            </Slider>
        </div>
    )
}

export default Heroslide
