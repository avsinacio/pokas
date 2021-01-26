import React from 'react'

import usePokemonListStore from '../../services/store/PokemonListStore'
import {
  PokemonListItem,
  ListHeaderComponent,
  PokeLoader,
} from '../../components'

import { SafeArea, FlatList, ListFooterComponent } from './styles'

const PokemonList = () => {
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
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={renderFooterComponent}
        onEndReachedThreshold={0.1}
        onEndReached={onEndReached}
      />
    </SafeArea>
  )
}

export default PokemonList
