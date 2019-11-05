import React, { Fragment } from 'react'
import './About.scss';
import about from '../../images/about.jpg';

export default function About() {
    const backgroundImage = {
        'backgroundImage': `url(${about})`
    }

    return (
        <Fragment>
            <section style={backgroundImage} className="section-about">
                <div className="container">
                    <div className="section__head section--header-underline">
                        <h2 className='section__title'>
                            About Me
                        </h2>
                    </div>
                    
                    <div className="section__body">
                        <div className="container container--small">
                            <div className="section__entry">
                                <p>
                                    Hello, I'm Emil. <br/>
                                    I'm a highly talented website developer with experience in building high quality modern and professional sites of various types ( company/organization website, landing page, blog, personal website, eCommerce store, portfolio website ). <br/>
                                    My knowledge includes: creating site, setting up and installing plugins, fixing bugs, expanding the functionality of the site. I can make a website from scratch or redesign and improve your existing site.
                                </p>
                            </div>
                            
                            <ul className="list-about">
                                <li>
                                    <p>
                                        <strong>
                                            Name:
                                        </strong>

                                        <span>
                                            Emil Georgiev
                                        </span>
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <strong>
                                            Email:
                                        </strong>

                                        <a href='mailto:emil_georgiev_it@abv.bg'>
                                            emil_georgiev_it@abv.bg
                                        </a>
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <strong>
                                            Address:
                                        </strong>

                                        <a target="_blank" href='https://www.google.com/maps/place/6+Carrig+Ct,+Fortunestown,+Dublin/data=!4m2!3m1!1s0x4867746724d90917:0x66baef66771ce998?sa=X&ved=2ahUKEwjlwcLE1dPlAhWxqHEKHRVNCT0Q8gEwAHoECBQQAQ'>
                                            6 Carrig Court, Fortunestown, Dublin
                                        </a>
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <strong>
                                            Phone:
                                        </strong>

                                        <a target="_blank" href='tel:0833617736'>
                                            083 361 7736
                                        </a>
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <strong>
                                            Date of birth:
                                        </strong>

                                        <span>
                                            6th August 1994
                                        </span>
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <strong>
                                            Nationality:
                                        </strong>

                                        <span>
                                            Bulgaria
                                        </span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
