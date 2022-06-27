import { useEffect, useState } from 'react';
import CharacterList from './components/CharacterList';
import Character from './components/Character';

function App() {
  return (
    <div>
      <h1 className="text-5xl font-bold underline text-center mt-4 p-2">
        Rick And Morty API with Daisy UI+tailwind css
      </h1>
      <CharacterList />
    </div>
  );
}

export default App;
