import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link,Stack} from 'expo-router';
import { StatusBar } from 'expo-status-bar';
const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text>Root Layout</Text>
      <StatusBar style='auto'/>
      <Link href='./profile' style={{color:'blue'}}>Go to Profile</Link>
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    }
})

