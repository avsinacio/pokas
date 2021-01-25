import React from 'react'

import { pokemonStatNames } from '../../../services/utils'
import RetroText from '../../atoms/RetroText'
import PokeLoader from '../../atoms/PokeLoader'

import { Card } from './styles'

const StatsCard = ({ stats }) => {
  if (!stats) return <PokeLoader />
  return (
    <Card>
      {stats?.map?.((stat, i) => (
        <RetroText key={`stat-${i}`}>{`${pokemonStatNames[stat.stat.name]} - ${
          stat.base_stat
        }`}</RetroText>
      ))}
    </Card>
  )
}

export default StatsCard
