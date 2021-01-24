import React from 'react'

import { pokemonTypeColors } from '../../../services/utils'

import { Wrapper, HalfWrapper, TypeName, Row } from './styles'

const TypeBar = ({ types }) => {
  if (!types) return null

  if (types[0]) {
    if (types[1]) {
      return (
        <Row>
          <HalfWrapper color={pokemonTypeColors[types[0].type.name]}>
            <TypeName>{types[0].type.name}</TypeName>
          </HalfWrapper>
          <HalfWrapper color={pokemonTypeColors[types[1].type.name]}>
            <TypeName>{types[1].type.name}</TypeName>
          </HalfWrapper>
        </Row>
      )
    }
    return (
      <Wrapper color={pokemonTypeColors[types[0].type.name]}>
        <TypeName>{types[0].type.name}</TypeName>
      </Wrapper>
    )
  }
}

export default TypeBar
