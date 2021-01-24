import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { getOriginalArtWork } from '../../../services/utils'

import { Wrapper, Image, Touchable, PokemonName, PokeNumber } from './styles'

const PokemonListItem = ({ item, index }) => {
  const navigation = useNavigation()
  const { name } = item

  return (
    <Touchable
      onPress={() =>
        navigation.navigate('PokemonDetails', { id: index + 1, name })
      }
    >
      <Wrapper>
        <PokemonName>{name || ''}</PokemonName>
        <Image source={{ uri: getOriginalArtWork(index + 1) }} />
        <PokeNumber>{`#${index + 1}`}</PokeNumber>
      </Wrapper>
    </Touchable>
  )
}

export default PokemonListItem
