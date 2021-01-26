import styled from 'styled-components/native'
import FastImage from 'react-native-fast-image'

export const Header = styled.View`
  width: 100%;
  height: 150px;
  border-bottom-width: 3px;
  border-bottom-color: #212121;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const Title = styled.Text`
  font-family: 'PressStart2P-Regular';
  color: #ffcb05;
  font-size: 36px;
  text-shadow-color: rgba(0, 0, 0, 0.75);
  text-shadow-radius: 10px;
  text-shadow: 3px 3px;
`

export const Image = styled(FastImage)`
  height: 100px;
  width: 100px;
  resize-mode: ${FastImage.resizeMode.contain};
`
