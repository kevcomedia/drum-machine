import React, { useState } from 'react';
import DrumPads from './DrumPads';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');

  return (
    <div className="App">
      <DrumPads onActivate={setDisplay} />
      <div className="display">{display}</div>
    </div>
  );
}

export default App;
