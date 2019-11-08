import React, { Component, Fragment } from 'react'
import Header from '../Header/Header'
import './Intro.scss';
import code from '../../images/code.jpeg';
import about from '../../images/about.jpg';
import home from '../../images/home.jpg';
import contact from '../../images/contact.jpg';
import work from '../../images/work.jpg';
import resume from '../../images/resume.jpg';
import ScrollspyNav from "react-scrollspy-nav";

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
                
                <div style={backgroundImages.intro}  id='section-1' className="intro">
                    <nav className='nav-main'>
                        <ScrollspyNav  
                            scrollTargetIds={["section-1", "section-2", "section-3", "section-4", "section-5"]}
                            activeNavClass="current">
                            
                            <ul>
                                <li style={backgroundImages.home} className='current home'>
                                    <a href='#section-1'>
                                        <span className='nav__title'>
                                            Home
                                        </span>

                                        <span className='nav__number'>
                                            1
                                        </span>
                                    </a>
                                </li>

                                <li style={backgroundImages.about} className='about'>
                                    <a href='#section-2'>
                                        <span className='nav__title'>
                                            About Me
                                        </span>

                                        <span className='nav__number'>
                                            2
                                        </span>
                                    </a>
                                </li>

                                <li style={backgroundImages.resume} className='resume'>
                                    <a href='#section-3'>
                                        <span className='nav__title'>
                                            Resume
                                        </span>

                                        <span className='nav__number'>
                                            3
                                        </span>
                                    </a>
                                </li>

                                <li style={backgroundImages.work} className='works'>
                                    <a href='#section-4'>
                                        <span className='nav__title'>
                                            Portfolio
                                        </span>

                                        <span className='nav__number'>
                                            4
                                        </span>
                                    </a>
                                </li>

                                <li style={backgroundImages.contact} className='contact'>
                                    <a href='#section-5'>
                                        <span className='nav__title'>
                                            Contact
                                        </span>

                                        <span className='nav__number'>
                                            5
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </ScrollspyNav>
                    </nav>
                </div>             
            </Fragment>
        )
    }
}
