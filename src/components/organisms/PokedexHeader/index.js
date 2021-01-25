import React from 'react'
import { useNavigation } from '@react-navigation/native'

import BigBlueLight from '../../molecules/BigBlueLight'
import LittleColoredLights from '../../atoms/LittleColoredLights'
import RetroText from '../../atoms/RetroText'

import { Wrapper, RightPadding, Touchable } from './styles'

const colors = ['#ff0002', '#ffcb67', '#34cb67']

const PokedexHeader = () => {
  const navigation = useNavigation()

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
      <RightPadding>
        <Touchable onPress={() => navigation.goBack()}>
          <RetroText color="#ffffff">{'Voltar'}</RetroText>
        </Touchable>
      </RightPadding>
    </Wrapper>
  )
}

export default PokedexHeader
