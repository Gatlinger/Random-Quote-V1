import React from 'react';
import './App.css';
import randomQuote from './fetch';

function App() {
  // const iii = randomQuote()
  const pressMeHandler = () => {
    randomQuote()
  }

  return (
    <div>
      <button onClick={pressMeHandler}>PRESS ME</button>
      <div id={'div-for-content'}>
        
      </div>
      <div id={'div-for-author'}>
        
      </div>
    </div>
  );
}

export default App;
