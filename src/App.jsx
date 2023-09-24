import React from 'react'

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
}


// class component
/* 
import { Component } from "react"
class App extends Component {
  render() { 
    return (
      <div>Hello World</div>
    )
  }
} */

export default App;