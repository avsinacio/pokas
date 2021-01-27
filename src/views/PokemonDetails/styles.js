import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #dc092d;
`

export const ImageBackgroundDetailsBottom = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
`

export const TitleWrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-vertical: 20px;
`

export const Title = styled.Text`
  color: #f5f5f5;
  font-family: 'PressStart2P-Regular';
  text-transform: capitalize;
  text-shadow-color: rgba(0, 0, 0, 0.75);
  text-shadow-radius: 10px;
  text-shadow: 3px 3px;
`

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    paddingTop: 15,
    paddingBottom: 250,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
})`
  width: 100%;
`

export const ReturnButton = styled.TouchableHighlight.attrs({
  underlayColor: 'transparent',
})`
  padding: 15px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-width: 3px;
  border-bottom-color: #212121;
`

export const LoadingWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-content: center;
`
