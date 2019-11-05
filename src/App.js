import React, { Component } from 'react';
import Intro from './components/Intro/Intro';
import Loading from './components/Loading/Loading';
import About from './components/About/About';
import Resume from './components/Resume/Resume';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    }
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        isLoading: false
      })
    }, 20000);
  }
  render() {
    const { isLoading } = this.state;

    return (
      <div className="App">
          {
            isLoading ? <Loading /> : ''
          }

          <Intro />
          <About />
          <Resume />
      </div>
    );
  }
}

export default App;
