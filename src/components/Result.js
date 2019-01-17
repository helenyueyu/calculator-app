import React, {Component} from 'react'
import './Result.css'

class Result extends Component {
  render() {
    return (
      <div className="result">
        <input type="text" value={this.props.result} className="input" readOnly/>
      </div>
    )
  }
}

export default Result;
