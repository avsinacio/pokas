import React from 'react'
import { client } from '../../services/api'

const usePokemonDetails = () => {
  const [state, setState] = React.useState({
    loading: false,
    data: {},
    error: null,
  })

  const get = async (id) => {
    try {
      setState((prevState) => ({ ...prevState, loading: true }))
      const response = await client.get(`/${id}`)
      const {
        abilities,
        types,
        stats,
        height,
        weight,
        sprites,
        base_experience,
      } = response?.data

      // console.log(JSON.stringify(response?.datar, null, 2))
      // console.log(Object.keys(response?.data))

      setState((prevState) => ({
        ...prevState,
        data: {
          abilities,
          types,
          stats,
          height,
          weight,
          sprites,
          base_experience,
        },
        loading: false,
        error: null,
      }))
    } catch (error) {
      console.warn('error', error)
      setState((prevState) => ({
        ...prevState,
        data: prevState.data,
        loading: false,
        error,
      }))
    }
  }

  return {
    ...state,
    get,
  }
}

export default usePokemonDetails
