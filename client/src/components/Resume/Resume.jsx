import React, { Component } from 'react'
import resume from '../../images/resume.jpg';
import { Link } from 'react-router-dom';
import './Resume.scss';

export default class Resume extends Component {
    render() {
        const backgroundImage = {
            'backgroundImage': `url(${resume})`    
        }

        return (
            <section id='section-3' style={backgroundImage} className='section-resume'>
                <div className="section__head section--header-underline">
                    <h2 className='section__title'>
                        Resume
                    </h2>
                </div>
                
                <div className="section__body">
                    <div className="container container--small">
                        <div className="resume resume-education">
                            <div className="resume__head">
                                <h4 className='resume__title'>
                                    Education
                                </h4>
                            </div>
                            
                            <div className="resume__body">
                                <ul className="list-resume">
                                    <li>
                                        <h4>
                                            TECHNICAL UNIVERSITY-VARNA
                                        </h4>

                                        <span className='time'>
                                            2014 - 2018
                                        </span>
                                        
                                        <p> 
                                            Bachelor Computer Science and Technologies
                                        </p>
                                    </li>

                                    <li>
                                        <h4>
                                            SCHOOL PGD "YURI GAGARIN"
                                        </h4>

                                        <span className='time'>
                                            2010 - 2013
                                        </span>
                                        
                                        <p>
                                            Professional Automechanic
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="resume resume-education">
                            <div className="resume__head">
                                <h4 className='resume__title'>
                                    Employment
                                </h4>
                            </div>
                            
                            <div className="resume__body">
                                <ul className="list-resume">
                                    <li>
                                        <h4>
                                            TestTriangle - Front End Developer
                                        </h4>

                                        <span className='time'>
                                            2019 Jan – Present
                                        </span>
                                        
                                        <p> 
                                            I was working on Techfynder website which is a dedicated platform for IT, Contract Professionals, to connect globally with Businesses, matching skills, rates, experience, and location. I learned how to working with Angular 7 and Node Js.
                                        </p>
                                    </li>

                                    <li>
                                        <h4>
                                            2Create - Front End Developer
                                        </h4>

                                        <span className='time'>
                                            2017 Jan – 2018 Dec
                                        </span>
                                        
                                        <p>
                                            Initially joining the company as a trainee, I have progressed as Front-End developer. My role requires to create, develop and execute web sites for the Company’s clients.
                                        </p>
                                    </li>

                                    <li>
                                        <h4>
                                            Smart Home Sys - Web Administrator
                                        </h4>

                                        <span className='time'>
                                            Oct 2016 - Dec 2016
                                        </span>
                                        
                                        <p>
                                            I worked on international news website. During the internship, I gained experience on how to create my own websites CMS systems and improved my skills and knowledge in PHP.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="resume resume-education">
                            <div className="resume__head">
                                <h4 className='resume__title'>
                                    General Skills
                                </h4>
                            </div>
                            
                            <div className="resume__body">
                                <ul className="list-skills">
                                    <li>
                                        <p>
                                            <span className='progress-list-title'>
                                                HTML5
                                            </span>

                                            <span className='progress-list-value'>
                                                95%
                                            </span>
                                        </p>
                                        
                                        <div className="progress">
                                            <div style={{width : '95%'}} className="progress__bar">

                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <p>
                                            <span className='progress-list-title'>
                                                JS
                                            </span>

                                            <span className='progress-list-value'>
                                                90%
                                            </span>
                                        </p>
                                        
                                        <div className="progress">
                                            <div style={{width : '90%'}} className="progress__bar">

                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <p>
                                            <span className='progress-list-title'>
                                                Angular 4+
                                            </span>

                                            <span className='progress-list-value'>
                                                90%
                                            </span>
                                        </p>
                                        
                                        <div className="progress">
                                            <div style={{width : '90%'}} className="progress__bar">

                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <p>
                                            <span className='progress-list-title'>
                                                React
                                            </span>

                                            <span className='progress-list-value'>
                                                70%
                                            </span>
                                        </p>
                                        
                                        <div className="progress">
                                            <div style={{width : '70%'}} className="progress__bar">

                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <p>
                                            <span className='progress-list-title'>
                                                WebPack
                                            </span>

                                            <span className='progress-list-value'>
                                                60%
                                            </span>
                                        </p>
                                        
                                        <div className="progress">
                                            <div style={{width : '60%'}} className="progress__bar">

                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <p>
                                            <span className='progress-list-title'>
                                                jQuery
                                            </span>

                                            <span className='progress-list-value'>
                                                77%
                                            </span>
                                        </p>
                                        
                                        <div className="progress">
                                            <div style={{width : '77%'}} className="progress__bar">

                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <p>
                                            <span className='progress-list-title'>
                                                Express
                                            </span>

                                            <span className='progress-list-value'>
                                                80%
                                            </span>
                                        </p>
                                        
                                        <div className="progress">
                                            <div style={{width : '80%'}} className="progress__bar">

                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <p>
                                            <span className='progress-list-title'>
                                                CSS
                                            </span>

                                            <span className='progress-list-value'>
                                                99%
                                            </span>
                                        </p>
                                        
                                        <div className="progress">
                                            <div style={{width : '99%'}} className="progress__bar">

                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <p>
                                            <span className='progress-list-title'>
                                                LESS / SASS
                                            </span>

                                            <span className='progress-list-value'>
                                                99%
                                            </span>
                                        </p>
                                        
                                        <div className="progress">
                                            <div style={{width : '99%'}} className="progress__bar">

                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <p>
                                            <span className='progress-list-title'>
                                                WordPress
                                            </span>

                                            <span className='progress-list-value'>
                                                58%
                                            </span>
                                        </p>
                                        
                                        <div className="progress">
                                            <div style={{width : '58%'}} className="progress__bar">

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="section__actions">
                            <Link to='/files/EmilGeorgievCV.docx' target="_blank" download className='btn'>
                                Download CV
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
