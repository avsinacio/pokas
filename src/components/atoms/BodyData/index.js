import React from 'react'

import {
  decimetersToMeters,
  hectogramsToKilograms,
} from '../../../services/utils/'

import RetroText from '../RetroText'

import { Wrapper } from './styles'

const BodyData = ({ weight, height }) => {
  return (
    <Wrapper>
      {weight && (
        <RetroText>{`Weight: ${hectogramsToKilograms(weight)}kg`}</RetroText>
      )}
      {height && (
        <RetroText>{`Height: ${decimetersToMeters(height)}m`}</RetroText>
      )}
    </Wrapper>
  )
}

export default BodyData
