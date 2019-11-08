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
            <section id='section-4' style={backgroundImages.work} className='section-portfolio'>
                <div className="container">
                    <div className="section__head section--header-underline">
                        <h2 className="section__title">
                            Portfolio
                        </h2>
                    </div>
                    
                    <div className="section__body">
                        <Slider className='slider-portfolio' {...settings}>
                            <a href='http://techfynder.com/' className="slider__slide">
                                <div className="slider__inner">
                                    <div style={backgroundImages.techfynder} className="slider__image">
                                    </div>

                                    <div className="slider__overlay">
                                        <div className="slider__overlay-content">
                                            <h3>
                                                Techfynder
                                            </h3>
                                            
                                            <p>
                                                Dedicated platform for IT, Contract Professionals, to connect globally with Businesses, matching skills, rates, experience, and location. I learned how to working with Angular 7 and Node Js.
                                            </p>
                                        </div>
                                    </div>
                                </div>                                
                            </a>

                            <a href='http://daily-sale.herokuapp.com/' className="slider__slide">
                                <div className="slider__inner">
                                    <div style={backgroundImages.dailySale} className="slider__image">
                                    </div>

                                    <div className="slider__overlay">
                                        <div className="slider__overlay-content">
                                            <h3>
                                                DailySale
                                            </h3>
                                            
                                            <p>
                                                Online web platform which allows to post free ads and contact different users.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href='https://emart-205419.firebaseapp.com/' className="slider__slide">
                                <div className="slider__inner">
                                    <div style={backgroundImages.eMart} className="slider__image">
                                    </div>

                                    <div className="slider__overlay">
                                        <div className="slider__overlay-content">
                                            <h3>
                                                eMart
                                            </h3>
                                            
                                            <p>
                                                eCommerce website on Angular 4 and firebase
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href='https://www.testtriangle.com/' className="slider__slide">
                                <div className="slider__inner">
                                    <div style={backgroundImages.testtriangle} className="slider__image">
                                    </div>

                                    <div className="slider__overlay">
                                        <div className="slider__overlay-content">
                                            <h3>
                                                Test Triangle
                                            </h3>
                                            
                                            <p>
                                                Test Triangle is an emerging IT service provider specializing in application testing, DevOps, RPA, Custom software development, mobile app development, Atlassian consultancy, niche IT staff augmentation and training in advanced technologies.
                                            </p>
                                        </div>
                                    </div>                                    
                                </div>
                            </a>
                        </Slider>
                    </div>
                </div>
            </section>
        )
    }
}
