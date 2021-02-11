import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex-direction: row;
  width: 100%;
  padding-top: 20px;
  justify-content: space-around;
`

export const TypeBadge = styled.View`
  background-color: ${({ color }) => color};
  flex-basis: 40%;
  justify-content: center;
  align-items: center;
  padding-vertical: 20px;
  border: 3px solid #212121;
  border-radius: 3px;
`

export const TypeName = styled.Text`
  font-family: 'PressStart2P-Regular';
  text-transform: uppercase;
  color: #ffffff;
  text-shadow-color: rgba(0, 0, 0, 0.75);
  text-shadow-radius: 5px;
  text-shadow: 3px 3px;
`
