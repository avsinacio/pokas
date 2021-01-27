import styled from 'styled-components/native'
import FastImage from 'react-native-fast-image'

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 3px solid #212121;
  border-radius: 3px;
  background-color: palevioletred;
`

export const Image = styled(FastImage)`
  width: 150px;
  height: 150px;
`

export const Touchable = styled.TouchableHighlight.attrs({
  underlayColor: 'transaparent',
})`
  margin-horizontal: 15px;
  margin-vertical: 15px;
`

export const PokemonName = styled.Text`
  font-family: 'PressStart2P-Regular';
  font-size: 18px;
  text-transform: capitalize;
  color: #ffffff;
  flex-direction: row;
  text-align: left;
  text-shadow-color: rgba(0, 0, 0, 0.75);
  text-shadow-radius: 10px;
  text-shadow: 2px 2px;
`

export const PokeNumber = styled(PokemonName)`
  font-size: 14px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 10;
`
