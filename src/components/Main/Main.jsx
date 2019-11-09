import React, { Component, Fragment, createRef } from 'react'
import Resume from '../Resume/Resume';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';

export default class Main extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isFixed: false
        }

        this.backToTop = createRef();
    }
    
    componentDidMount() {
        document.addEventListener('scroll',  this.handleScroll);
    }

    componentWillUnmount(){
        document.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        if(window.scrollY >= 600) {
            this.setState({
                isFixed: true
            });
        } else if(window.scrollY <= 600) {
            this.setState({
                isFixed: false
            });
        }
        console.log(window.scrollY);
    }

    scrollToTop = () => {
        this.backToTop.current.scrollIntoView({behavior: 'smooth'});
    }

    render() {
        return (
            <Fragment>
                <div className='wrapper' ref={this.backToTop }>
                    <Header isFixed={this.state.isFixed}/>                
                    <Intro isFixed={this.state.isFixed}/>
                    <About />
                    <Resume />
                    <Portfolio />
                    <Contact/>

                    <a href='#home' onClick={this.scrollToTop} className={this.state.isFixed? 'back-top fixed' : 'back-top'}>
                        <svg className='ico ico-back-top' width='30px' height='30px' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 31.479 31.479">
                            <path d="M26.477,10.274c0.444,0.444,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-8.047-8.047
                                v26.555c0,0.619-0.492,1.111-1.111,1.111c-0.619,0-1.127-0.492-1.127-1.111V3.813l-8.031,8.047c-0.444,0.429-1.159,0.429-1.587,0
                                c-0.444-0.444-0.444-1.143,0-1.587l9.952-9.952c0.429-0.429,1.143-0.429,1.571,0L26.477,10.274z"/>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                    </a>
                </div>
            </Fragment>
        )
    }
}
