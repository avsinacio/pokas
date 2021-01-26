import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex-direction: row;
  width: 100%;
  height: 153px;
  border-bottom-width: 3px;
  border-bottom-color: #212121;
  justify-content: center;
  align-items: center;
`

export const RightPadding = styled.View`
  padding-right: 10px;
`

export const Touchable = styled.TouchableHighlight.attrs({
  underlayColor: 'transparent',
})``
