import React, { Component } from 'react';
import Loading from './components/Loading/Loading';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
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

          <Router>
              <Switch>
                <Route exact path='/' component = { Main }/>
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
