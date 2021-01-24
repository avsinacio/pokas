import React from 'react'
import { client } from '../../services/api'

const usePokemonList = () => {
  const [state, setState] = React.useState({
    loading: false,
    offset: 0,
    data: [],
    error: null,
  })

  const get = async () => {
    try {
      setState((prevState) => ({ ...prevState, loading: true }))
      const response = await client.get('', {
        params: {
          offset: state.offset,
          limit: 15,
        },
      })

      const { data } = response

      setState((prevState) => ({
        data: [...prevState.data, ...data.results],
        loading: false,
        offset: prevState.offset + 15,
        error: null,
      }))
    } catch (error) {
      console.warn('error')
      setState((prevState) => ({
        data: [...prevState.data],
        loading: false,
        offset: prevState.offset,
        error,
      }))
    }
  }

  return {
    ...state,
    get,
  }
}

export default usePokemonList
