import React from 'react'
import { Animated, Easing } from 'react-native'

import { images } from '../../../assets/img'

import { Image } from './styles'

const AnimatedImage = Animated.createAnimatedComponent(Image)

const PokeLoader = () => {
  const [rotation] = React.useState(new Animated.Value(0))

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start()
  })

  return (
    <AnimatedImage
      source={images.pokeball}
      style={{
        transform: [
          {
            rotate: rotation.interpolate({
              inputRange: [0, 1],
              outputRange: ['1deg', '360deg'],
            }),
          },
        ],
      }}
    />
  )
}

export default PokeLoader
