import React from 'react';

import { useFetch } from '../hooks/fetchData';
import './CharPicker.css';

const CharPicker = (props) => {

  const [loading, loadedCharacters] = useFetch('https://swapi.co/api/people', [])

  const characters = loadedCharacters ? loadedCharacters.results.slice(0, 5).map((char, index) => ({
    name: char.name,
    id: index + 1
  })) : [];




  let content = <p>Loading characters...</p>;

  if (
    !loading &&
    characters &&
    characters.length > 0
  ) {
    content = (
      <select
        onChange={props.onCharSelect}
        value={props.selectedChar}
        className={props.side}
      >
        {characters.map(char => (
          <option key={char.id} value={char.id}>
            {char.name}
          </option>
        ))}
      </select>
    );
  }
  return content;
}

export default CharPicker;
