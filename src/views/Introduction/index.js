import React from 'react'
import { Platform } from 'react-native'

import useTrainerStore from '../../services/store/TrainerStore'
import { WelcomeHeader, TextInput, RetroText } from '../../components'

import {
  SafeArea,
  Wrapper,
  KeyboardAvoidingView,
  SpeechBalloon,
} from './styles'

const Introduction = ({ navigation }) => {
  const { setTrainer } = useTrainerStore()
  const [text, setText] = React.useState('')

  const handleOnSpeechBalloonOnPress = () => {
    setTrainer(text)
    navigation.navigate('PokemonList')
  }

  return (
    <SafeArea edges={['top', 'bottom']}>
      <WelcomeHeader />
      <Wrapper>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <TextInput value={text} onChangeText={setText} maxLength={10} />

          <RetroText lineHeight={20}>{'First, what is your name?'}</RetroText>
          <SpeechBalloon onPress={handleOnSpeechBalloonOnPress}>
            <RetroText lineHeight={20}>{`My name is ${text} ->`}</RetroText>
          </SpeechBalloon>
        </KeyboardAvoidingView>
      </Wrapper>
    </SafeArea>
  )
}

export default Introduction
