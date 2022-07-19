import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
function App() {
  // const text = 'Hello, JSX'
  // const textJSX = <h1>{text}</h1>
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
  return (
    tick
  );
}

export default App;
