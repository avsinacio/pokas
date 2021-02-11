import styled from 'styled-components/native'
import FastImage from 'react-native-fast-image'
import { SafeAreaView } from 'react-native-safe-area-context'

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #dc092d;
`

export const Wrapper = styled.View`
  flex: 1;
  border-bottom-width: 3px;
  border-bottom-color: #212121;
  justify-content: center;
  padding-horizontal: 15px;
`

export const SpeechBalloon = styled.TouchableHighlight.attrs({
  underlayColor: 'palevioletred',
})`
  background-color: #ffffff;
  padding: 15px;
  border: 3px solid #212121;
`

export const ProfessorOakPositioner = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
`

export const ProfessorOak = styled(FastImage)`
  width: 148px;
  height: 125px;
`

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`
