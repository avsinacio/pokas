import React from 'react'

import { Border, Reflex } from './styles'

const LittleColoredLights = ({ color }) => {
  return (
    <Border color={color}>
      <Reflex />
    </Border>
  )
}

export default LittleColoredLights
