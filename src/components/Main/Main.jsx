import React, { Component, Fragment } from 'react'
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

    render() {
        return (
            <Fragment>
                <Header isFixed={this.state.isFixed}/>                
                <Intro isFixed={this.state.isFixed}/>
                <About isFixed={this.state.isFixed} />
                <Resume />
                <Portfolio />
                <Contact/>
            </Fragment>
        )
    }
}
