import React, {Component} from 'react'
import Number from './Number'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      propVal: 0,
      isComponent: false,
    }
    this.incrementProps = this.incrementProps.bind(this)
    this.mountComponent = this.mountComponent.bind(this)
  }

  incrementProps() {
    this.setState({propVal: this.state.propVal + 1})
  }

  mountComponent() {
    this.setState({isComponent: !this.state.isComponent})
  }

  render() {
    return (
      <div className="App">
        <input type="button" value="Numberコンポーネントのマウント切り替え" onClick={this.mountComponent} />
        <br />
        {(() => {
          if (this.state.isComponent) {
            return <Number propVal={this.state.propVal} />
          } else {
            return null
          }
        })()}
        <input type="button" value="propの加算" onClick={this.incrementProps} />
        <br />
      </div>
    )
  }
}

export default App
