import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #dc092d;
`

export const Header = styled.View`
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #212121;
`

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  resize-mode: contain;
`

export const Title = styled.Text`
  color: #f5f5f5;
  font-family: 'PressStart2P-Regular';
  text-transform: capitalize;
`

export const ScrollView = styled.ScrollView.attrs({
  flexGrow: 1,
})`
  width: 100%;
`
