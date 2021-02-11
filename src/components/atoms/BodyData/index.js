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
        <RetroText>{`Weight: ${
          weight ? hectogramsToKilograms(weight) : '-'
        }kg`}</RetroText>
      )}
      {height && (
        <RetroText>{`Height: ${
          height ? decimetersToMeters(height) : ''
        }m`}</RetroText>
      )}
    </Wrapper>
  )
}

export default BodyData
