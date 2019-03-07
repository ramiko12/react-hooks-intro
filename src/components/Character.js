import React, { useEffect } from 'react';

import Summary from './Summary';
import { useFetch } from '../hooks/fetchData';

const Character = (props) => {
  


  const [loading, fetchedCharacter] = useFetch('https://swapi.co/api/people/' + props.selectedChar, [props.selectedChar]);

  let loadedCharacter=null
  if(fetchedCharacter){
     loadedCharacter = {
      id: fetchedCharacter.selectedChar,
      name: fetchedCharacter.name,
      height: fetchedCharacter.height,
      colors: {
        hair: fetchedCharacter.hair_color,
        skin: fetchedCharacter.skin_color
      },
      gender: fetchedCharacter.gender,
      movieCount: fetchedCharacter.films.length
    };
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate');
  //   return (
  //     nextProps.selectedChar !== this.props.selectedChar ||
  //     nextState.loadedCharacter.id !== this.state.loadedCharacter.id ||
  //     nextState.isLoading !== this.state.isLoading
  //   );
  // }

  // componentDidUpdate(prevProps) {
  //   console.log('Component did update');
  //   if (prevProps.selectedChar !== this.props.selectedChar) {
  //     this.fetchData();
  //   }
  // }

  // componentDidMount() {
  //   this.fetchData();
  // }

  // useEffect(fetchData, []); //similar to component did mount


  useEffect(() => {
    return () => {
      console.log("similar to will unmount up");
    }
  }, [])



  // componentWillUnmount() {
  //   console.log('Too soon...');
  // }


  let content = <p>Loading Character...</p>;

  if (!loading && fetchedCharacter) {
    content = (
      <Summary
        name={loadedCharacter.name}
        gender={loadedCharacter.gender}
        height={loadedCharacter.height}
        hairColor={loadedCharacter.colors.hair}
        skinColor={loadedCharacter.colors.skin}
        movieCount={loadedCharacter.movieCount}
      />
    );
  }
  return content;

}

export default React.memo(Character, (prevProps, nextProps) => {
  return (
    nextProps.selectedChar === prevProps.selectedChar
  );
});//opposite of shouldComponentUpdate
