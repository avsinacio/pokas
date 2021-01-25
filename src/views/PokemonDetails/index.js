import React from 'react'

import { usePokemonDetails } from '../../services/hooks'
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

  const { get, data } = usePokemonDetails()

  React.useEffect(() => {
    const load = async () => {
      get(pokemonId)
    }
    load()
  }, [pokemonId])

  return (
    <SafeArea edges={['top', 'left', 'right']}>
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
        <TypeBar types={data.types} />
        <TitleWrapper>
          <Title>{`#${pokemonId} ${pokemonName}`}</Title>
        </TitleWrapper>
        <StatsCard stats={data.stats} />
        <BodyData height={data.height} weight={data.weight} />
      </ScrollView>
    </SafeArea>
  )
}

export default PokemonDetails

// #99cb9a
