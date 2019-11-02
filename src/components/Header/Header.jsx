import React, { Fragment } from 'react'
import logo from '../../images/logo.jpg';
import './Header.scss';

export default function Header() {
    return (
        <Fragment>
            <header className='header'>
                <div className="container">
                    <a href='/' className="logo">
                        <img src={logo} alt=""/>
                    </a>
                </div>
            </header>
        </Fragment>
    )
}
