import React, { useState, useRef } from 'react';

import bulbOn from './assets/bulb-on.png';
import bulbOff from './assets/bulb-off.png';

import './App.css';

function App() {
  const buttonRef = useRef(null);
  const [isOn, setIsOn] = useState(true);

  const handleClick = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div>
      <h1>This room is {isOn ? 'lit' : 'dark'}</h1>
      <img src={isOn ? bulbOn : bulbOff} alt="light bulb" ref={buttonRef} />
      <div className='switch' onClick={handleClick}>
        <div className={`switch-button ${isOn ? 'on' : 'off'}`} />
      </div>
    </div>
  );
}

export default App;
