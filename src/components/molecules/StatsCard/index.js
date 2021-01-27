import React from 'react'

import { pokemonStatNames } from '../../../services/utils'
import RetroText from '../../atoms/RetroText'
import PokeLoader from '../../atoms/PokeLoader'

import { Card, Spacing } from './styles'

const StatsCard = ({ stats }) => {
  if (!stats) return <PokeLoader />
  return (
    <Card>
      {stats?.map?.((stat, i) => (
        <Spacing key={`stat-${i}`}>
          <RetroText>{`${pokemonStatNames[stat.stat.name]}`}</RetroText>
          <RetroText>{`${stat.base_stat}`}</RetroText>
        </Spacing>
      ))}
    </Card>
  )
}

export default StatsCard
