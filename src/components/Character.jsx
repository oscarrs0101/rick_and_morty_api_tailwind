import React from 'react';

const Character = ({ character }) => {
  return (
    <div class="card w-60 bg-slate-600  shadow-xl m-3">
      <figure>
        <img class="w-full" src={character.image} alt="Shoes" />
      </figure>
      <div class="card-body  text-center  content-center">
        <h2 class="font-bold text-xl mb-2  ">Name: {character.name}!</h2>
        <p> Status:{character.status}</p>
        <p>Species: {character.species}</p>
        <div class="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default Character;
