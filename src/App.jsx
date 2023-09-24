import React from 'react'
import Note from  './components/Note'

function App(props) {
  console.log(props.ns)
  const { ns } = props
  const itemList = []

  /* ns.forEach((note) => { 
    itemList.push(<Note key={note.id} note={note} />)
  }) */

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          ns.map((note) => { 
            return <Note key={note.id} note={note} />
          })
          //itemList
        }
      </ul>
    </div>
  )
}

export default App