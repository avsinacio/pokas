import React from 'react'

import BigBlueLight from '../../molecules/BigBlueLight'
import LittleColoredLights from '../../atoms/LittleColoredLights'
import RetroText from '../../atoms/RetroText'

import { Wrapper, RightPadding } from './styles'

const colors = ['#ff0002', '#ffcb67', '#34cb67']

const PokedexHeader = () => {
  return (
    <Wrapper>
      <RightPadding>
        <BigBlueLight />
      </RightPadding>
      {colors.map((color, i) => (
        <RightPadding key={`color-${i}`}>
          <LittleColoredLights color={color} />
        </RightPadding>
      ))}
    </Wrapper>
  )
}

export default PokedexHeader
