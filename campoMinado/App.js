import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Params from './src/params';
import params from './src/params';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> 
          Iniciando o Campo Minado!!
        </Text>
        <Text>
          Tamanho da grade: {params.getRowsAmount()}x{params.getColumsAmount()}
        </Text>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})