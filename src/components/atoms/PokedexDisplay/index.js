import React from 'react'

import { getOriginalArtWork } from '../../../services/utils'

import { Display, Pokemon } from './styles'

const PokedexDisplay = ({ pokemonId }) => (
  <Display>
    <Pokemon source={{ uri: getOriginalArtWork(pokemonId) }} />
  </Display>
)

export default PokedexDisplay
