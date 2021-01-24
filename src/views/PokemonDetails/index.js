import React from 'react'

import { usePokemonDetails } from '../../services/hooks'
import { getOriginalArtWork } from '../../services/utils'
import { TypeBar, StatsCard, RetroText, PokeLoader } from '../../components'

import { SafeArea, Title, Header, Image, ScrollView } from './styles'

const PokemonDetails = ({ route }) => {
  const { id: pokemonId, name: pokemonName } = route?.params

  const { get, data } = usePokemonDetails()

  React.useEffect(() => {
    const load = async () => {
      get(pokemonId)
    }
    load()
  }, [pokemonId])

  return (
    <SafeArea edges={['top', 'left', 'right']}>
      <Header>
        <Title>{`#${pokemonId} ${pokemonName}`}</Title>
        <Image source={{ uri: getOriginalArtWork(pokemonId) }} />
      </Header>
      <TypeBar types={data.types} />
      <ScrollView>
        <StatsCard stats={data.stats} />
      </ScrollView>
    </SafeArea>
  )
}

export default PokemonDetails

// #99cb9a
