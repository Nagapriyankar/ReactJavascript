import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const notes = [
    {
        id: 1,
        content: 'working with list',
        important: true
    },
    {
        id: 2,
        content: 'working with array',
        important: false
    },
    {
        id: 3,
        content: 'working with keys',
        important: true
    },
    {
        id: 4,
        content: 'working with events',
        important: false
    },
    {
        id: 5,
        content: 'working with props vs stats',
        important: true
    },
];

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

