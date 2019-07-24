// @flow
//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// function App() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React Haaaasss
//           </a>
//         </header>
//       </div>
//     );
//   }

// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import Example from "./Example";
import MyProvider from "./MyProvider";

function App() {
  return (
    //{/* set the Worldview container to 100% view height and view width so it covers the whole screen */}
    // [<div style={{ margin: 30, paddingLeft: 300 }}>

    // </div>,
    <div style={{ width: "100vw", height: "100vh" }}>
      <MyProvider />
      <Example />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);