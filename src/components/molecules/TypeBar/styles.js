import styled from 'styled-components/native'

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
`

export const Wrapper = styled.View`
  flex-direction: row;
  height: 80px;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ color }) => color};
  width: 100%;
`

export const HalfWrapper = styled.View`
  flex-direction: row;
  height: 80px;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  width: 50%;
`

export const TypeName = styled.Text`
  font-family: 'PressStart2P-Regular';
  text-transform: uppercase;
  color: #ffffff;
`