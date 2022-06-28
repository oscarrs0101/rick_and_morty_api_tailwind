import React, { useEffect, useState } from 'react';
import Character from './Character';

const Navbar = ({ page, setPage }) => {
  return (
    <header class="w-full flex flec-col  justify-between ">
      <button
        onClick={() => setPage(page - 1)}
        class="btn btn-outline bg-slate-600 text-sky-200"
      >
        Previus Page
      </button>
      <button
        onClick={() => setPage(page + 1)}
        class="btn btn-outline bg-slate-600 text-sky-200"
      >
        Page {page}
      </button>
    </header>
  );
};

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState();

  if (page < 1) {
    setPage(maxPages);
  }

  if (page > maxPages) {
    setPage(1);
  }
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );

      const data = await response.json();
      setLoading(false);
      // console.log(data);
      setCharacters(data.results);
      setMaxPages(data.info.pages);
      // console.log(data.results);
      console.log(data.info.pages);
      setMaxPages(data.info.pages);
    }
    fetchData();
  }, [page]);

  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div class=" w-full flex justify-center p-12  flex-wrap  ">
      <Navbar page={page} setPage={setPage} />

      {loading ? (
        <h1>Loading</h1>
      ) : (
        characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })
      )}
      <Navbar page={page} setPage={setPage} />
    </div>
  );
};

export default CharacterList;
