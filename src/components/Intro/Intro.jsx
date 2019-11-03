import React, { Component, Fragment } from 'react'
import Header from '../Header/Header'
import './Intro.scss';
import code from '../../images/code.jpeg';
import about from '../../images/about.jpg';
import home from '../../images/home.jpg';
import contact from '../../images/contact.jpg';
import work from '../../images/work.jpg';
import resume from '../../images/resume.jpg';

export default class Intro extends Component {
    render() {
        const backgroundImages = {
            intro: {
                backgroundImage: `url(${code})`
            },
            about: {
                backgroundImage: `url(${about})`
            },
            work: {
                backgroundImage: `url(${work})`
            },
            contact: {
                backgroundImage: `url(${contact})`
            },
            resume: {
                backgroundImage: `url(${resume})`
            },
            home: {
                backgroundImage: `url(${home})`
            },
        }

        return (
            <Fragment>
                <Header />
                
                <div style={backgroundImages.intro} className="intro">
                    <nav className='nav-main'>
                        <ul>
                            <li style={backgroundImages.home} className='current home'>
                                <a>
                                    <span className='nav__title'>
                                        Home
                                    </span>

                                    <span className='nav__number'>
                                        1
                                    </span>
                                </a>
                            </li>

                            <li style={backgroundImages.about} className='about'>
                                <a href="">
                                    <span className='nav__title'>
                                        About
                                    </span>

                                    <span className='nav__number'>
                                        2
                                    </span>
                                </a>
                            </li>

                            <li style={backgroundImages.resume} className='resume'>
                                <a href="">
                                    <span className='nav__title'>
                                        Resume
                                    </span>

                                    <span className='nav__number'>
                                        3
                                    </span>
                                </a>
                            </li>

                            <li style={backgroundImages.work} className='works'>
                                <a href="">
                                    <span className='nav__title'>
                                        Works
                                    </span>

                                    <span className='nav__number'>
                                        4
                                    </span>
                                </a>
                            </li>

                            <li style={backgroundImages.contact} className='contact'>
                                <a href="">
                                    <span className='nav__title'>
                                        Contact
                                    </span>

                                    <span className='nav__number'>
                                        5
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>             
            </Fragment>
        )
    }
}
