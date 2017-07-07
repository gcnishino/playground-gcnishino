import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const props = {
  id: 'bar',
  className: 'foo',
}
ReactDOM.render(
  <h1 style={{color: 'red'}} {...props}>
    {/* comment */}Hello, world!
  </h1>,
  document.getElementById('root'),
)
registerServiceWorker()
