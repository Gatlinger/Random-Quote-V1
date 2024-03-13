import React from 'react';
import './App.css';
import randomQuote from './fetch';

function App() {
  // const iii = randomQuote()
  const pressMeHandler = () => {
    randomQuote()
  }

  return (
    <div className='App'>

      <button onClick={pressMeHandler} className='button-class'>СЛУЧАЙНАЯ ЦИТАТА</button>

      <div id={'div-for-content'} className='div-for-content-class'>
      </div>

      <div id={'div-for-author'} className='div-for-author-class'>
      </div>

    </div>
  );
}

export default App;
