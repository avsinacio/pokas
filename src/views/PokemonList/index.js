import React from 'react'

import useTrainerStore from '../../services/store/TrainerStore'
import usePokemonListStore from '../../services/store/PokemonListStore'
import { PokemonListItem, PokeLoader } from '../../components'

import {
  SafeArea,
  FlatList,
  ListFooterComponent,
  ListHeaderComponent,
  Title,
} from './styles'

const PokemonList = () => {
  const { trainer } = useTrainerStore()
  const { pokemon, loading, increaseOffset, getPokemon } = usePokemonListStore()

  React.useEffect(() => {
    const load = async () => {
      await getPokemon()
      increaseOffset()
    }
    load()
  }, [getPokemon, increaseOffset])

  const renderItem = ({ item, index }) => {
    return <PokemonListItem item={item} index={index} />
  }

  const renderHeaderComponent = () => (
    <ListHeaderComponent>
      <Title>{`Welcome to Pokas,\ntrainer ${trainer}`}</Title>
    </ListHeaderComponent>
  )

  const renderFooterComponent = () => {
    if (loading) {
      return (
        <ListFooterComponent>
          <PokeLoader />
        </ListFooterComponent>
      )
    }
    return <ListFooterComponent />
  }

  const onEndReached = async () => {
    await getPokemon()
    increaseOffset()
  }

  return (
    <SafeArea edges={['top']}>
      <FlatList
        keyExtractor={(_, i) => `poke_${i}`}
        data={pokemon}
        renderItem={renderItem}
        ListHeaderComponent={renderHeaderComponent}
        ListFooterComponent={renderFooterComponent}
        onEndReachedThreshold={0.1}
        onEndReached={onEndReached}
      />
    </SafeArea>
  )
}

export default PokemonList
