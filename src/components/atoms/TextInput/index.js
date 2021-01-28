import React from 'react'

import { TextInput as StyledTextInput, Wrapper } from './styles'

const TextInput = ({ onChangeText, value, maxLength }) => {
  return (
    <StyledTextInput
      placeholder="My name is"
      returnKeyType="done"
      underlineColorAndroid="transparent"
      maxLength={maxLength}
      onChange={(e) => onChangeText(e.nativeEvent.text)}
      value={value}
    />
  )
}

export default TextInput
