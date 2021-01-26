import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FastImage from 'react-native-fast-image'

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

export const ImageBackgroundDetails = styled.View`
  margin-vertical: 25px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border: 2px solid #212121;
  border-bottom-left-radius: 20px;
`

export const ImageBackground = styled.View`
  background-color: #99cb9a;
  width: 250px;
  height: 250px;
  border: 1px solid #212121;
  justify-content: flex-end;
  align-items: center;
`

export const Image = styled(FastImage)`
  width: 200px;
  height: 200px;
  resize-mode: ${FastImage.resizeMode.contain};
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
`

export const ScrollView = styled.ScrollView.attrs({
  flexGrow: 1,
  paddingBottom: 200,
})`
  width: 100%;
`
