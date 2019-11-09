import React, { Fragment } from 'react'
import logo from '../../images/logo2.png';
import './Header.scss';

const Header = ({isFixed}) => {
    return (
        <Fragment>
            <header className={isFixed? 'header fixed' : 'header'}>
                <div className="header__inner">
                    <a href='/' className="logo">
                        <img src={logo} alt=""/>
                    </a>

                </div>
            </header>
        </Fragment>
    )
}

export default Header;