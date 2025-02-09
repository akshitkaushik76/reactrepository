import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import Counter from './components/counter'
// function Test2() {
//   return(
//     <h1>this is a test function</h1>
//   )
// }
// const reactElement  = React.createElement(
//   'a',
//   {href:'https://google.com',target:'_blank'},
//   'click me to visit google'
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Counter/>
    
  </StrictMode>,
)
