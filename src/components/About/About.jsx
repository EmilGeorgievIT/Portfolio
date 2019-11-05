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
                    <div className="section__head">
                        <h2 className='section__title'>
                            About
                        </h2>
                    </div>
                    
                    <div className="section__body">
                        <div className="container container--small">
                            <div className="section__entry">
                                <p>
                                    Hello, I'm Emil.
                                    I'm a highly talented website developer with experience in building high quality modern and professional sites of various types ( company/organization website, landing page, blog, personal website, eCommerce store, portfolio website ). My knowledge includes: creating site, setting up and installing plugins, fixing bugs, expanding the functionality of the site. I can make a website from scratch or redesign and improve your existing site.
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
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
