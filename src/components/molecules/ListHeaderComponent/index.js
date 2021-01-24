import React from 'react'

import { Header, Title, Image } from './styles'

import { getOriginalArtWork } from '../../../services/utils'

const ListHeaderComponent = () => {
  return (
    <Header>
      <Title>P</Title>
      <Image source={{ uri: getOriginalArtWork(101) }} />
      <Title>OKAS</Title>
    </Header>
  )
}

export default ListHeaderComponent
