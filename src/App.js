import React, { useState } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

const App = (props) => {

  const [chosenSide, setChosenSide] = useState('light');

  const [destroyed, setDestroyed] = useState(false)

  const [selectedCharacter, setSelectedCharacter] = useState(1);

  const sideHandler = (side) => (event) => {
    setChosenSide(side);
  };

  const charSelectHandler = event => {
    const charId = event.target.value;
    setSelectedCharacter(charId)
  };

  const destructionHandler = () => {
    setDestroyed(true);
  };


  let content = (
    <React.Fragment>
      <CharPicker
        side={chosenSide}
        selectedChar={selectedCharacter}
        onCharSelect={charSelectHandler}
      />
      <Character selectedChar={selectedCharacter} />
      <button onClick={sideHandler('light')}>
        Light Side
        </button>
      <button onClick={sideHandler('dark')}>Dark Side</button>
      {chosenSide === 'dark' && (
        <button onClick={destructionHandler}>DESTROY!</button>
      )}
    </React.Fragment>
  );

  if (destroyed) {
    content = <h1>Total destruction!</h1>;
  }
  return content;

}

export default App;
