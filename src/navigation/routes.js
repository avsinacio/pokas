import PokemonList from '../views/PokemonList'
import PokemonDetails from '../views/PokemonDetails'

export const routes = [
  {
    name: 'PokemonList',
    component: PokemonList,
    title: 'Pokémon List',
  },
  {
    name: 'PokemonDetails',
    component: PokemonDetails,
    title: 'Pokémon Details',
  },
]
