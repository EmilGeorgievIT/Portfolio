import React, { Fragment, Component } from 'react'
import logo from '../../images/logo2.png';
import './Header.scss';
import ScrollspyNav from "react-scrollspy-nav";

class Header extends Component {
    closeMenu = () => {
        const burger = document.querySelector('.burger');
        const x = document.querySelector('.x');
        const y = document.querySelector('.y');
        const z = document.querySelector('.z');
        const circle =  document.querySelector('.circle');
        const menu = document.querySelector('.menu');

        x.classList.remove('rotate45');
        x.classList.add('rotate30')
        z.classList.remove('rotate135')
        z.classList.add('rotate150');				
        burger.classList.remove('open');
		circle.classList.remove('expand');
		menu.classList.remove('animate');
		
		setTimeout(function(){ 			
			x.classList.remove('rotate30'); 
			z.classList.remove('rotate150'); 			
		}, 50);
        
        setTimeout(function(){
            
			y.style.display = 'block';
            x.classList.remove('collapse');
            y.classList.remove('collapse');
            z.classList.remove('collapse');
		}, 70);
    }

    openMenu = () => {
        const burger = document.querySelector('.burger');
        const x = document.querySelector('.x');
        const y = document.querySelector('.y');
        const z = document.querySelector('.z');
        const circle =  document.querySelector('.circle');
        const menu = document.querySelector('.menu');

        circle.classList.toggle('expand');
        burger.classList.toggle('open');
        x.classList.toggle('collapse');
        y.classList.toggle('collapse');
        z.classList.toggle('collapse');
        menu.classList.toggle('animate');
       
        setTimeout(function(){ 			
            y.style.display = 'none';
            x.classList.toggle('rotate30');
            z.classList.toggle('rotate150');	
        }, 70);

        setTimeout(function(){ 			
            x.classList.toggle('rotate45');
            z.classList.toggle('rotate135');	
        }, 120);
    }

    render() {
        return (
            <Fragment>
                <header className={this.props.isFixed? 'header fixed' : 'header'}>
                    <div className="header__inner">
                        <a href='/' className="logo">
                            <img src={logo} alt=""/>
                        </a>
                        
                        <div className={this.props.isFixed? 'nav-mobile fixed': 'nav-mobile'}>
                            <div className="circle"></div>
                            <div className="menu">
                                <ScrollspyNav
                                    scrollTargetIds={["section-1", "section-2", "section-3", "section-4", "section-5"]}
                                    activeNavClass="current">
                                    <ul>
                                        <li onClick={this.closeMenu} className='home'>
                                            <a className='current' href='#section-1'>
                                                <span className='nav__title'>
                                                    Home
                                                </span>
                                            </a>
                                        </li>
    
                                        <li onClick={this.closeMenu} className='about'>
                                            <a href='#section-2'>
                                                <span className='nav__title'>
                                                    About Me
                                                </span>
                                            </a>
                                        </li>
    
                                        <li onClick={this.closeMenu} className='resume'>
                                            <a href='#section-3'>
                                                <span className='nav__title'>
                                                    Resume
                                                </span>
                                            </a>
                                        </li>
    
                                        <li onClick={this.closeMenu} className='works'>
                                            <a href='#section-4'>
                                                <span className='nav__title'>
                                                    Portfolio
                                                </span>
                                            </a>
                                        </li>
    
                                        <li onClick={this.closeMenu} className='contact'>
                                            <a href='#section-5'>
                                                <span className='nav__title'>
                                                    Contact
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </ScrollspyNav>
                            </div>
    
                            <div onClick={this.openMenu} className="burger">
                                <div className="x"></div>
                                <div className="y"></div>
                                <div className="z"></div>
                            </div>
                        </div>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default Header;