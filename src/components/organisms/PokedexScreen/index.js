import React from 'react'

import PokedexDisplay from '../../atoms/PokedexDisplay'
import LittleColoredLights from '../../atoms/LittleColoredLights'

import { Wrapper, UpperWrapper, LowerWrapper, Dash, DashColumn } from './styles'

const PokedexScreen = ({ pokemonId }) => {
  return (
    <Wrapper>
      <UpperWrapper>
        <LittleColoredLights color="#ff0002" />
        <LittleColoredLights color="#ff0002" />
      </UpperWrapper>
      <PokedexDisplay pokemonId={pokemonId} />
      <LowerWrapper>
        <LittleColoredLights color="#ff0002" />
        <DashColumn>
          {[...Array(4)].map((_, i) => (
            <Dash key={`dash-${i}`} />
          ))}
        </DashColumn>
      </LowerWrapper>
    </Wrapper>
  )
}

export default PokedexScreen
