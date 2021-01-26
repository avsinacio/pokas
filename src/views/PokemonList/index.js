import React from 'react'

import {
  PokemonListItem,
  ListHeaderComponent,
  PokeLoader,
} from '../../components'

import usePokemonListStore from '../../services/store/PokemonList'

import { SafeArea, FlatList, ListFooterComponent } from './styles'

const PokemonList = () => {
  const { pokemon, loading, increaseOffset, getPokemon } = usePokemonListStore()

  React.useEffect(() => {
    const load = async () => {
      await getPokemon()
      increaseOffset()
    }
    load()
  }, [])

  const renderItem = ({ item, index }) => {
    return <PokemonListItem item={item} index={index} />
  }

  const onEndReached = async () => {
    await getPokemon()
    increaseOffset()
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

  return (
    <SafeArea edges={['top', 'left', 'right']}>
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
