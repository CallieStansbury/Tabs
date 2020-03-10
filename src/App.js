import React, { useState } from 'react';
import Tabs from './Components/Tabs';
import DisplayTab from './Components/DisplayTab'; 
import './App.css';

function App() {
  const [setIndex, setIndexState] = useState(0)

  const changeValue = (textIndex) => {
    setIndexState(textIndex)
  }

  const textArray = [
    "Puppies are the cutest and the best!",
    "Kitties are cute but gross!",
    "Bunnies have floppy ears and hop!",
    "Fishies are wet and they swim!",
    "Birdies have wings and sing to you!"
  ]
  return (
    <div className="App">
      <Tabs changeValue={() => changeValue(0)} tabLabel="Puppies" />
      <Tabs changeValue={() => changeValue(1)} tabLabel="Kitties" />
      <Tabs changeValue={() => changeValue(2)} tabLabel="Bunnies" />
      <Tabs changeValue={() => changeValue(3)} tabLabel="Fishies" />
      <Tabs changeValue={() => changeValue(4)} tabLabel="Birdies" />

      <p><DisplayTab displayText={textArray[setIndex]} /></p>

    </div>
  );
}

export default App;
