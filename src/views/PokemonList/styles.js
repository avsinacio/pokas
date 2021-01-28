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

export const ListHeaderComponent = styled.View`
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 3px;
  border-bottom-color: #212121;
`

export const Title = styled.Text`
  font-family: 'PressStart2P-Regular';
  color: #ffcb05;
  font-size: 20px;
  line-height: 20px;
  text-shadow-color: rgba(0, 0, 0, 0.75);
  text-shadow-radius: 10px;
  text-shadow: 3px 3px;
`
