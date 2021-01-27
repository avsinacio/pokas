import React from 'react'
import FastImage from 'react-native-fast-image'

import { Header, Title, Image } from './styles'

import { getOriginalArtWork } from '../../../services/utils'

const ListHeaderComponent = () => {
  return (
    <Header>
      <Title>P</Title>
      <Image
        source={{ uri: getOriginalArtWork(101) }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Title>OKAS</Title>
    </Header>
  )
}

export default ListHeaderComponent
