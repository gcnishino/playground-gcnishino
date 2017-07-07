import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        props1: {this.props.myPropsName1}
        props2: {this.props.myPropsName2}
      </div>
    )
  }
}

export default App
