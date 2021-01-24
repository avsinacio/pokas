import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  background-color: palevioletred;
`

export const Image = styled.Image`
  width: 150px;
  height: 150px;
  resize-mode: contain;
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
`

export const PokeNumber = styled(PokemonName)`
  font-size: 14px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 10;
`
