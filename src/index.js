import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const myProps = {
  myPropsName1: 'myPropsValue1',
  myPropsName2: 'myPropsValue2',
}
ReactDOM.render(<App {...myProps} />, document.getElementById('root'))
registerServiceWorker()
