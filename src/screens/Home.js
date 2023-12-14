import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {APP_NAME} from '@env';

const Home = () => {
  return (
    <View>
      <Text>App Name: {APP_NAME}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})