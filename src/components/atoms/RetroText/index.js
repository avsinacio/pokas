import React from 'react'

import { Text } from './styles'

const RetroText = ({ children, color, lineHeight, fontSize }) => {
  return (
    <Text color={color} lineHeight={lineHeight} fontSize={fontSize}>
      {children}
    </Text>
  )
}

export default RetroText
