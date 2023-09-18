//OUR FIRST REACT COMPONENT
//js function
//for now doesnot receive any arg

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
      <p>Hello { mname } is {a + b } years old</p>
    </div>
  )
}

export default App;