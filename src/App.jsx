import React from 'react'
import Note from  './components/Note'

function App(props) {
  console.log(props.ns)
  const { ns } = props
  const itemList = []

  /* ns.forEach((note) => { 
    itemList.push(<Note key={note.id} note={note} />)
  }) */

  const addNote = (e) => {
    e.preventDefault()
    console.log('button clicked')
    console.log(e.target.elements.note.value)
  }


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

      <form onSubmit={addNote}>
        <input name='note'/>
        <button type='submit'>Save note</button>
      </form>

      <form onSubmit={addNote}>
        <input name='note' />
        <button onClick={addNote}>Save note</button>
      </form>
    </div>
  )
}

export default App