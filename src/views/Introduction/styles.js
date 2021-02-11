import styled from 'styled-components/native'
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
  align-items: center;
  padding-horizontal: 15px;
`

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`

export const SpeechBalloon = styled.TouchableHighlight.attrs({
  underlayColor: 'palevioletred',
})`
  background-color: #ffffff;
  padding: 15px;
  border: 3px solid #212121;
`
