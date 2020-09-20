import React from 'react';
import './Daily.css';
import OwlCarousel from 'react-owl-carousel2';

const Daily = () => {
    const options = {
        items: 3,
        nav: false,
        rewind: true,
        autoplay: false
    };

    return (
        <span className="weather-daily">
            <div style={{fontSize : '16px', fontWeight: 'bold'}}> Daily </div>
            <div className="carousel">
                    
            </div>
            <div className="carousel-nav" style={{left: 0}}>
                <i className="fa fa-chevron-left fa-lg pl-2" onClick={() => this.carousel.prev()}></i>
            </div>
            <div className="carousel-nav" style={{right: 0}}>
                <i className="fa fa-chevron-right fa-lg pr-2" onClick={() => this.carousel.next()}></i>
            </div>
        </span>
    )
}

export default Daily;