import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myText: null,
    }
    this.setMyText = this.setMyText.bind(this)
  }

  setMyText() {
    this.setState({myText: this.refs.myText.value})
    this.refs.myText.value = ''
  }

  render() {
    return (
      <div className="App">
        <p>
          入力値:{this.state.myText}
        </p>
        <input type="text" ref="myText" />
        <input type="button" value="入力" onClick={this.setMyText} />
      </div>
    )
  }
}

export default App
