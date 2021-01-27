import styled from 'styled-components/native'
import FastImage from 'react-native-fast-image'

export const Display = styled.View`
  width: 80%;
  height: 75%;
  background-color: #99cb9a;
  border: 3px solid #212121;
  justify-content: center;
  align-content: center;
`

export const Pokemon = styled(FastImage)`
  width: 95%;
  height: 95%;
  resize-mode: ${FastImage.resizeMode.contain};
`
