import React from 'react'

import { images } from '../../assets/img'
import { ListHeaderComponent, RetroText } from '../../components'

import {
  SafeArea,
  ProfessorOak,
  SpeechBalloon,
  ProfessorOakPositioner,
  Wrapper,
} from './styles'

const professorOakLines =
  'Welcome to the world of Pokémon®. For some people, pokémon are pets. Others use them for fights. Myself... I study pokémon as a profession. To help me with this, I called someone and so Pokas was created.\nTouch the speech ballon to continue . . .'

const Welcome = ({ navigation }) => (
  <SafeArea edges={['top', 'bottom']}>
    <ListHeaderComponent />
    <Wrapper>
      <SpeechBalloon onPress={() => navigation.navigate('PokemonList')}>
        <RetroText lineHeight={20}>{professorOakLines}</RetroText>
      </SpeechBalloon>
      <ProfessorOakPositioner>
        <ProfessorOak source={images.prof_oak} />
      </ProfessorOakPositioner>
    </Wrapper>
  </SafeArea>
)

export default Welcome
