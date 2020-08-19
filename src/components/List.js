import React from 'react';
import styled from 'styled-components';

const PokemonWrap = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Pokemon = styled.li`
  display: block;
  padding: 20px;
  margin: 5px;
  border-radius: 3px;
  background: #e0e0e0;
  cursor: pointer;

  &:hover {
    background: #101010;
    color: #fff;
  }
`;

function List({ pokemons, onSelect }) {
  return (
    <PokemonWrap>
      {pokemons && pokemons.map(({ name, url }) => <Pokemon key={name} onClick={() => onSelect(url)}>{ name }</Pokemon>)}
    </PokemonWrap>
  );
}

export default List;
