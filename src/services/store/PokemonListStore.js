import create from 'zustand'
import { client } from '../api'

const usePokemonListStore = create((set, get) => ({
  pokemon: [],
  offset: 0,
  loading: false,
  error: null,
  reset: () =>
    set({
      pokemon: [],
      offset: 0,
      loading: false,
      error: null,
    }),
  increaseOffset: () =>
    set((state) => ({
      offset: state.offset + 15,
    })),
  getPokemon: async () => {
    try {
      set({ loading: true })
      const { data } = await client.get('', {
        params: {
          offset: get().offset,
          limit: 15,
        },
      })
      set((state) => ({
        pokemon: state?.pokemon?.length
          ? state?.pokemon?.concat(data?.results)
          : data?.results,
        loading: false,
        error: null,
      }))
    } catch (error) {
      console.warn(error)
      set((state) => ({
        pokemon: [state.pokemon],
        loading: false,
        error,
      }))
    }
  },
}))

export default usePokemonListStore
