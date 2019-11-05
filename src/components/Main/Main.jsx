import React, { Component, Fragment } from 'react'
import Resume from '../Resume/Resume';
import Intro from '../Intro/Intro';
import About from '../About/About';


export default class Main extends Component {
    render() {
        return (
            <Fragment>                
                <Intro />
                <About />
                <Resume />
            </Fragment>
        )
    }
}
