import { View, Text,Image } from 'react-native'
import React from 'react'
import {images} from '../constants'
const EmptyState = () => {
  return (
    <View className="justify-center items-center px-4">
      <Image source={images.empty} className="w-[270px]"/>
    </View>
  )
}

export default EmptyState