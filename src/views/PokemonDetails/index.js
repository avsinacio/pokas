import React from 'react'

import usePokemonStore from '../../services/store/PokemonStore'
import { getOriginalArtWork } from '../../services/utils'
import {
  TypeBar,
  StatsCard,
  PokedexHeader,
  LittleColoredLights,
  SoundOutputSymbol,
  BodyData,
} from '../../components'

import {
  SafeArea,
  Image,
  ScrollView,
  ImageBackground,
  ImageBackgroundDetails,
  ImageBackgroundDetailsBottom,
  Title,
  TitleWrapper,
} from './styles'

const PokemonDetails = ({ route }) => {
  const { id: pokemonId, name: pokemonName } = route?.params
  const { getPokemonById, pokemon } = usePokemonStore()

  React.useEffect(() => {
    const load = async () => {
      getPokemonById(pokemonId)
    }
    load()
  }, [pokemonId])

  return (
    <SafeArea edges={['top']}>
      <PokedexHeader />
      <ImageBackgroundDetails>
        <ImageBackground>
          <Image source={{ uri: getOriginalArtWork(pokemonId) }} />
        </ImageBackground>
        <ImageBackgroundDetailsBottom>
          <LittleColoredLights color="red" />
          <SoundOutputSymbol />
        </ImageBackgroundDetailsBottom>
      </ImageBackgroundDetails>
      <ScrollView>
        <TypeBar types={pokemon.types} />
        <TitleWrapper>
          <Title>{`#${pokemonId} ${pokemonName}`}</Title>
        </TitleWrapper>
        <StatsCard stats={pokemon.stats} />
        <BodyData height={pokemon.height} weight={pokemon.weight} />
      </ScrollView>
    </SafeArea>
  )
}

export default PokemonDetails

// #99cb9a
