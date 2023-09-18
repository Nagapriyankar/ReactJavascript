import './style.css'

//OUR FIRST REACT COMPONENT
//js function
//for now doesnot receive any arg

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Greeting called</p>
      <p>Hello {props.name}, your age is {props.age}</p>
    </div>
  )
}

const App = () => { 
  /* 
  return html
  also execute or contain js code
  */
  
  const now = new Date();
  let mname = 'Priyanka'
  let a = 10
  let b = 15

  
  console.log('hello from component App!')
  return (
    <div>
      <p>Hello World! it is {now.toString()}</p>
      <p>Hello {mname} is {a + b} years old</p>
      <h1 style={{background: 'red', color:'white'}}>Greetings</h1>
      <Hello name='sathish' age='25'/>
      <Hello name='Krish' age='15'/>
    </div>
  )
}

export default App;