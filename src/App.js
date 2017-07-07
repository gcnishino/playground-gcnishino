import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myState: 1,
    }
    setInterval(() => {
      this.setState({
        myState: this.state.myState + 1,
      })
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        myState: {this.state.myState}
      </div>
    )
  }
}

export default App
