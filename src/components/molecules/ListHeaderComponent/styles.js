import styled from 'styled-components/native'

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
`

export const Image = styled.Image`
  height: 100px;
  width: 100px;
  resize-mode: contain;
`
