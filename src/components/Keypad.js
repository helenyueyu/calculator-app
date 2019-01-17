import React, {Component} from 'react'
import './Keypad.css'

class Keypad extends Component {
  render() {
    return (<div className="button">
      <button name="(" onClick={e => this.props.onClick(e.target.name)} className="key">(</button>
      <button name=")" onClick={e => this.props.onClick(e.target.name)} className="key">)</button>
      <button name="CE" onClick={e => this.props.onClick(e.target.name)} className="clear">CE</button>
      <button name="C" onClick={e => this.props.onClick(e.target.name)} className="clear">C</button><br/>

      <button name="1" onClick={e => this.props.onClick(e.target.name)} className="num pulse">1</button>
      <button name="2" onClick={e => this.props.onClick(e.target.name)} className="num">2</button>
      <button name="3" onClick={e => this.props.onClick(e.target.name)} className="num">3</button>
      <button name="+" onClick={e => this.props.onClick(e.target.name)} className="att">+</button><br/>

      <button name="4" onClick={e => this.props.onClick(e.target.name)} className="num">4</button>
      <button name="5" onClick={e => this.props.onClick(e.target.name)} className="num">5</button>
      <button name="6" onClick={e => this.props.onClick(e.target.name)} className="num">6</button>
      <button name="-" onClick={e => this.props.onClick(e.target.name)} className="att">-</button><br/>

      <button name="7" onClick={e => this.props.onClick(e.target.name)} className="num">7</button>
      <button name="8" onClick={e => this.props.onClick(e.target.name)} className="num">8</button>
      <button name="9" onClick={e => this.props.onClick(e.target.name)} className="num">9</button>
      <button name="*" onClick={e => this.props.onClick(e.target.name)} className="att">x</button><br/>

      <button name="." onClick={e => this.props.onClick(e.target.name)} className="key">.</button>
      <button name="0" onClick={e => this.props.onClick(e.target.name)} className="num">0</button>
      <button name="=" onClick={e => this.props.onClick(e.target.name)} className="key">=</button>
      <button name="/" onClick={e => this.props.onClick(e.target.name)} className="att">÷</button><br/>
    </div>)
  }
}

export default Keypad
