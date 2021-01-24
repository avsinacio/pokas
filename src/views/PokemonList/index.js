import React from 'react'

import {
  PokemonListItem,
  ListHeaderComponent,
  PokeLoader,
} from '../../components'
import { usePokemonList } from '../../services/hooks'

import { SafeArea, FlatList, ListFooterComponent } from './styles'

const PokemonList = () => {
  const { get, data, loading } = usePokemonList()

  React.useEffect(() => {
    const load = async () => {
      await get()
    }
    load()
  }, [])

  const renderItem = ({ item, index }) => {
    return <PokemonListItem item={item} index={index} />
  }

  const onEndReached = () => {
    get()
  }

  const renderFooterComponent = () => (
    <ListFooterComponent>{loading && <PokeLoader />}</ListFooterComponent>
  )

  return (
    <SafeArea edges={['top', 'left', 'right']}>
      <FlatList
        keyExtractor={(_, i) => `poke_${i}`}
        data={data}
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
