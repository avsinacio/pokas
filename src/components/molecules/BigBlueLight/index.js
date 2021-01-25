import React from 'react'
import { Animated, Easing } from 'react-native'

import { Border, Light, Reflex } from './styles'

const AnimatedLight = Animated.createAnimatedComponent(Light)

const BigBlueLight = () => {
  const [opacity] = React.useState(new Animated.Value(0))

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start()
  })

  return (
    <Border>
      <AnimatedLight
        style={{
          opacity: opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}
      >
        <Reflex />
      </AnimatedLight>
    </Border>
  )
}

export default BigBlueLight
