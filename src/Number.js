import React, {Component} from 'react'

class Number extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stateVal: 0,
    }
    this.incrementState = this.incrementState.bind(this)
  }

  incrementState() {
    this.setState({stateVal: this.state.stateVal + 1})
  }

  componentWillMount() {
    console.log('コンポーネントのマウント前')
  }

  componentDidMount() {
    console.log('コンポーネントのマウント後')
  }

  componentWillReceiveProps() {
    console.log('コンポーネントが受け取るpropsが変化')
  }

  shouldComponentUpdate() {
    console.log('コンポーネントがアップデートされる前1')
    return true
  }

  componentWillUpdate() {
    console.log('コンポーネントがアップデートされる前')
  }

  componentDidUpdate() {
    console.log('コンポーネントがアップデートされた後')
  }

  componentWillUnmount() {
    console.log('コンポーネントがアンマウントされた後')
  }

  render() {
    return (
      <div className="Number">
        <p>
          props:{this.props.propVal}
        </p>
        <p>
          state:{this.state.stateVal}
        </p>
        <input type="button" value="stateの加算" onClick={this.incrementState} />
      </div>
    )
  }
}

export default Number
