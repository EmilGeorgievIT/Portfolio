import React, { Fragment } from 'react'
import logo from '../../images/logo2.png';
import './Header.scss';

export default function Header() {
    return (
        <Fragment>
            <header className='header'>
                <div className="header__inner">
                    <a href='/' className="logo">
                        <img src={logo} alt=""/>
                    </a>

                </div>
            </header>
        </Fragment>
    )
}
