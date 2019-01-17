import React, {Component} from 'react';
import './App.css';

import Result from './components/Result'
import Keypad from './components/Keypad'


class App extends Component {
  state = {
    result: ''
  }
  componentDidMount() {
    document.addEventListener('keypress', (event) => (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '-', '+', '/'].includes(event.key)) ? this.setState(
      {
        result: this.state.result + event.key
      }
    ) : (event.key==='Enter') ? this.setState(
      {
        result: (eval(this.state.result) || '') + ''
      }
    ) : console.log('Not a valid entry.'))
  }
  componentWillUnmount() {
    document.removeEventListener('keypress')
  }
  onClick = key => {
    if (key === "C") {
      this.setState({result: ''})
    } else if (key === "CE") {
      this.setState({
        result: this.state.result.slice(0, -1)
      })
    } else if (key === "=") {
      try {
        this.setState({
          result: (eval(this.state.result) || '') + ''
        })
      } catch (e) {
        this.setState({result: 'error'})
      }
    } else {
      this.setState({
        result: this.state.result + key
      })
    }
  }
  reset = () => {
    this.setState({result: ''})
  }
  render() {
    return (<div>
      <div className="calculator">
        <p className="invisible">Invisible text.</p>
        <Result result={this.state.result} onChange={this.handleChange}/>
        <Keypad onClick={this.onClick}/>
      </div>
    </div>);
  }
}

export default App;
