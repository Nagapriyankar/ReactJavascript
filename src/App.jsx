/* import React from 'react'

//pasing props functional component
function Hello({name}) {
  return (
    <div>
      Hello, {name}
    </div>
  )
}

function App() {
  return (
    <div>
      <Hello name="KRISH" />
    </div>
  )
} */


// class component

import { Component } from "react"

class Hello extends Component {
  render() {
    const { name } = this.props;
    return <div>Hello {name}!</div>
  }
}

class App extends Component {
  render() { 
    return (
      <div>
        <Hello name='Priyanka' />
      </div>
    )
  }
} 

export default App;