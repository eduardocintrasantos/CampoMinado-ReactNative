import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import params from './src/params';
import Field from './src/components/Field';
import Flag from './src/components/Flag';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> 
          Iniciando o Campo Minado!!
        </Text>
        <Text style={styles.intructions}>
          Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>

        <Field />
        <Field opened nearMines={1}/>
        <Field opened nearMines={2}/>
        <Field opened nearMines={4}/>
        <Field opened nearMines={6}/>
        <Field opened nearMines={8}/>
        <Field mined />
        <Field opened mined />
        <Field mined opened exploded />
        <Field flagged />
        <Field flagged opened />
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
  },
  intructions: {
    textAlign: 'center',
  }
})