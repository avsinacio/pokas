import create from 'zustand'
import { client } from '../api'

const usePokemonStore = create((set) => ({
  pokemon: {},
  loading: false,
  error: null,
  reset: () =>
    set({
      pokemon: {},
      loading: false,
      error: null,
    }),
  getPokemonById: async (pokemonId) => {
    try {
      set({ loading: true })
      const { data } = await client.get(`/${pokemonId}`)
      set(() => ({
        pokemon: {
          ...data,
        },
        loading: false,
        error: null,
      }))
    } catch (error) {
      console.warn(error)
      set((state) => ({
        pokemon: state.pokemon,
        loading: false,
        error,
      }))
    }
  },
}))

export default usePokemonStore
