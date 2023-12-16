import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {APP_NAME} from '@env';
import Icon from '../components/Icon';

const Home = () => {
  return (
    <View>
      <Text>App Name: {APP_NAME}</Text>
      <Icon library={'FontAwesome'} size={30} name={'home'}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})