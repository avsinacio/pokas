import styled from 'styled-components/native'

export const Text = styled.Text`
  font-family: 'PressStart2P-Regular';
  color: ${({ color }) => color || '#212121'};
  ${({ lineHeight }) => (lineHeight ? `line-height: ${lineHeight}px;` : '')}
  ${({ fontSize }) => (fontSize ? `font-size: ${fontSize}px;` : '')}
`
