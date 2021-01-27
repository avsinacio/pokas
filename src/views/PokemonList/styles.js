import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #dc092d;
`

export const FlatList = styled.FlatList.attrs({
  contentContainerStyler: {
    flexGrow: 1,
    paddingBottom: 150,
  },
})`
  width: 100%;
`

export const ListFooterComponent = styled.View`
  height: 200px;
  justify-content: center;
  align-items: center;
`
