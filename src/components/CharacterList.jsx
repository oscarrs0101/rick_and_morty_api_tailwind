import React, { useEffect, useState } from 'react';
import Character from './Character';
const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      console.log(data.results);
      setLoading(false);
      setCharacters(data.results);
    }
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div class=" w-full flex justify-center p-12  flex-wrap  bg-red-700 ">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })
      )}
    </div>
  );
};

export default CharacterList;
