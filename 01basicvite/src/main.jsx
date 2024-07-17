import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    props:{
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

function MyApp(){
    return(
        <div>
            <h1>Custom React app</h1>
        </div>
    )
}

const AnotherElemet = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const areactElement = React.createElement(
    'a', // type
    {href: 'https://google.com', target: '_blank'}, // props
    'click to visit google' // children
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
