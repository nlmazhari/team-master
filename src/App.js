import React, { Component } from 'react'
import Box from './components/box'
import ReactTooltip from 'react-tooltip'

class App extends Component {

  render() {
    return (
      	<div className="App">
          <div className="container">
            <Box />
            <ReactTooltip type='light' effect='solid' className='tooltip' />
          </div>
      </div>
    )
  }
}

export default App