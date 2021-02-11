import React from 'react'
import FastImage from 'react-native-fast-image'

import { getOriginalArtWork } from '../../../services/utils'

import { Display, Pokemon } from './styles'

const PokedexDisplay = ({ pokemonId }) => (
  <Display>
    <Pokemon
      source={{ uri: getOriginalArtWork(pokemonId) }}
      resizeMode={FastImage.resizeMode.contain}
    />
  </Display>
)

export default PokedexDisplay
