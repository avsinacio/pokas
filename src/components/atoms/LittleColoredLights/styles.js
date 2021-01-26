import styled from 'styled-components/native'

export const Border = styled.View`
  height: 25px;
  width: 25px;
  border-radius: 15px;
  border: 3px solid #212121;
  background-color: ${({ color }) => color || 'lime'};
`

export const Reflex = styled.View`
  top: 2px;
  left: 3px;
  height: 10px;
  width: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  opacity: 0.7;
`
