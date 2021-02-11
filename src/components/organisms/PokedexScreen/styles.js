import styled from 'styled-components/native'

export const Wrapper = styled.View`
  width: 100%;
  height: 345px;
  background-color: #ffffff;
  border: 3px solid #212121;
  border-radius: 1px;
  border-bottom-left-radius: 50px;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 5px;
`

export const UpperWrapper = styled.View`
  flex-direction: row;
  transform: scale(0.5);
  width: 20%;
  justify-content: space-between;
`

export const LowerWrapper = styled.View`
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  align-items: flex-end;
`

export const Dash = styled.View`
  background-color: #212121;
  height: 3px;
  margin-bottom: 3px;
  width: 40px;
`

export const DashColumn = styled.View`
  flex-direction: column;
`
