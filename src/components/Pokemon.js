import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Loader from './Loader';

const PokemonWrap = styled.div`
  background: #fff;
  padding: 30px;
`;

function Pokemon({ pokemonUrl }) {
  const [loading, setLoading] = useState(true);
  const [pokemonInfo, setPokemonInfo] = useState();

  useEffect(() => {
    getPokemonInfo();
  }, []);

  const getPokemonInfo = async () => {
    setLoading(true);
    const result = await axios.get(pokemonUrl);
    setPokemonInfo(result?.data)
    setLoading(false);
  }

  const getAbilities = () => pokemonInfo.abilities.map(({ ability }) => ability.name );
  
  const getMoves = () => pokemonInfo.moves.map(({ move }) => move.name );

  return (
    <PokemonWrap>
      { (loading || !pokemonInfo)
        ? <Loader />
        : (
          <div>
            <h1>{ pokemonInfo.name }</h1>
            <img src={pokemonInfo.sprites.front_default} alt={`${pokemonInfo.name}`} />
            <h2>Abilities:</h2>
            { getAbilities().join(', ') }
            <h2>Moves:</h2>
            { getMoves().join(', ') }
          </div>
        )
      }
    </PokemonWrap>
  );
}

export default Pokemon;
