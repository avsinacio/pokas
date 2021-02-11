import React from 'react'

import { pokemonTypeColors } from '../../../services/utils'

import { Wrapper, TypeBadge, TypeName } from './styles'

const TypeBar = ({ types }) => {
  if (!types) return null

  if (types[0]) {
    if (types[1]) {
      return (
        <Wrapper>
          <TypeBadge color={pokemonTypeColors[types[0].type.name]}>
            <TypeName>{types[0].type.name}</TypeName>
          </TypeBadge>
          <TypeBadge color={pokemonTypeColors[types[1].type.name]}>
            <TypeName>{types[1].type.name}</TypeName>
          </TypeBadge>
        </Wrapper>
      )
    }
    return (
      <Wrapper>
        <TypeBadge color={pokemonTypeColors[types[0].type.name]}>
          <TypeName>{types[0].type.name}</TypeName>
        </TypeBadge>
      </Wrapper>
    )
  }
}

export default TypeBar
