import React from 'react';

const Character = ({ character }) => {
  return (
    <div>
      <h2 className="bg-red-500">{character.name}</h2>
      <img src={character.image} alt={character.name} />
    </div>
  );
};

export default Character;
