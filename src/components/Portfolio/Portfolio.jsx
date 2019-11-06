import React, { Component } from 'react'
import Slider from "react-slick"
import work from '../../images/work.jpg';
import dailySale from '../../images/DailySale.png';
import eMart from '../../images/eMart.png';
import techfynder from '../../images/techfynder.png';
import testtriangle from '../../images/testtriangle.png';


import './Portfolio.scss';


export default class Portfolio extends Component {
    
    render() {
        const backgroundImages = {
            work: {
                backgroundImage: `url(${work})`
            },
            dailySale: {
                backgroundImage: `url(${dailySale})`
            },
            work: {
                backgroundImage: `url(${work})`
            },
            eMart: {
                backgroundImage: `url(${eMart})`
            },
            testtriangle: {
                backgroundImage: `url(${testtriangle})`
            },
            techfynder: {
                backgroundImage: `url(${techfynder})`
            },
        }

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3
        };

        return (
            <section style={backgroundImages.work} className='section-portfolio'>
                <div className="container">
                    <div className="section__head section--header-underline">
                        <h2 className="section__title">
                            Portfolio
                        </h2>
                    </div>
                    
                    <div className="section__body">
                        <Slider className='slider-portfolio' {...settings}>
                            <div className="slider__slide">
                                <div style={backgroundImages.techfynder} className="slider__image">
                                </div>
                            </div>

                            <div className="slider__slide">
                                <div style={backgroundImages.dailySale} className="slider__image">
                                </div>
                            </div>

                            <div className="slider__slide">
                                <div style={backgroundImages.eMart} className="slider__image">
                                </div>
                            </div>

                            <div className="slider__slide">
                                <div style={backgroundImages.testtriangle} className="slider__image">
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        )
    }
}
