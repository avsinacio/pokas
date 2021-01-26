import React from 'react'
import { useNavigation } from '@react-navigation/native'

import BigBlueLight from '../../molecules/BigBlueLight'
import LittleColoredLights from '../../atoms/LittleColoredLights'

import { Wrapper, OneThird } from './styles'

const colors = ['#ff0002', '#ffcb67', '#34cb67']

const PokedexHeader = () => (
  <Wrapper>
    <OneThird>
      <BigBlueLight />
    </OneThird>
    <OneThird />
    <OneThird>
      {colors.map((color, i) => (
        <LittleColoredLights key={`light-${i}`} color={color} />
      ))}
    </OneThird>
  </Wrapper>
)

export default PokedexHeader
