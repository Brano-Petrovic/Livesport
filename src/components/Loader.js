import React from 'react';
import styled, { keyframes } from 'styled-components';
import pokeball from '../assets/pokeball.png';

const rotation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const AnimatedImage = styled.img`
  width: 30px;
  height: 30px;
  animation: ${rotation} 1s linear infinite;
  margin: 50px;
`;

function Loader() {
  return (
    <AnimatedImage src={pokeball} alt="pokemon loader" />
  );
}

export default Loader;
