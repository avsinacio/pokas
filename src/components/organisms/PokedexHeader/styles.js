import styled from 'styled-components/native'

export const Wrapper = styled.View`
  width: 100%;
  height: 150px;
  border-bottom-width: 1px;
  border-bottom-color: #212121;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  padding-horizontal: 20px;
  padding-top: 15px;
`

export const RightPadding = styled.View`
  padding-right: 10px;
`

export const Touchable = styled.TouchableHighlight.attrs({
  underlayColor: 'transparent',
})``
