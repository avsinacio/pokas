import React from 'react'

import usePokemonStore from '../../services/store/PokemonStore'
import {
  TypeBar,
  StatsCard,
  PokedexHeader,
  BodyData,
  PokedexScreen,
  PokeLoader,
} from '../../components'

import {
  SafeArea,
  ScrollView,
  Title,
  TitleWrapper,
  ReturnButton,
  LoadingWrapper,
} from './styles'

const PokemonDetails = ({ route, navigation }) => {
  const { id: pokemonId, name: pokemonName } = route?.params
  const { getPokemonById, pokemon, loading } = usePokemonStore()

  React.useEffect(() => {
    const load = async () => {
      getPokemonById(pokemonId)
    }
    load()
  }, [pokemonId, getPokemonById])

  return (
    <SafeArea edges={['top']}>
      <PokedexHeader />
      <ReturnButton onPress={() => navigation.goBack()}>
        <Title>{'Return'}</Title>
      </ReturnButton>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <PokedexScreen pokemonId={pokemonId} />
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
