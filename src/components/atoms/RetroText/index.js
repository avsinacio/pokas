import React from 'react'

import { Text } from './styles'

const RetroText = ({ children, color }) => {
  return <Text color={color}>{children}</Text>
}

export default RetroText
