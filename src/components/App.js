import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';
import Pagination from './Pagination';
import Loader from './Loader';
import Pokemon from './Pokemon';
import styled from 'styled-components';

const PER_PAGE = 50;

const PageWrap = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .7);
  text-align: center;
  padding: 10% 10% 20%;
  box-sizing: border-box;
`;

const Close = styled.div`
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 30px;
  color: #fff;
`;

function App() {
  const [pokemons, setPokemons] = useState({});
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    getPokemons(page);
  }, []);

  const getPokemons = async (forPage) => {
    setLoading(true);
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${PER_PAGE}&offset=${forPage * PER_PAGE}`);
    setLoading(false);

    const newPokemons = pokemons;
    newPokemons[forPage] = result?.data?.results;

    setPokemons(newPokemons);
    setCount(result?.data?.count);
    setPage(forPage);
  }

  const changePage = async (newPage) => {
    !pokemons[newPage] ? getPokemons(newPage) : setPage(newPage);
  }

  return (
    <PageWrap>
      <h1>Pokemons</h1>
      { loading
        ? <Loader />
        : <List pokemons={pokemons[page]} onSelect={setSelectedPokemon} />
      }
      { count > 0 && (
        <Pagination
          currentPage={page}
          perPage={PER_PAGE}
          totalCount={count}
          onChange={changePage}
        />
      )}
      { selectedPokemon && (
        <Modal>
          <Pokemon pokemonUrl={selectedPokemon} />
          <Close onClick={() => setSelectedPokemon(null)}>&times;</Close>
        </Modal>
      )}
    </PageWrap>
  );
}

export default App;
