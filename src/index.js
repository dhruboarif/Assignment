import React from 'react'
import ReactDOM from 'react-dom'
import App from "./components/App"; 
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
  

 

// ReactDOM.render(<Clock locale="bn-BD"></Clock>, document.getElementById('root'));

// const element = <h1>Hello world</h1>

// function getGreeting(user){
//     if(user) {
//         return <h1> Hello, {user} </h1>; 
//     }
//     return <h1>Hello, Stranger. </h1>
// }

// const element2 = <h1> Hello {getGreeting('Arif')}</h1>

// console.log(element); 

