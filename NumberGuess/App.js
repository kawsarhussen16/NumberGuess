import GameScreen from './components/StartGameScreen.js';
import Header from './components/Header.js';
import React from 'react';
import { StyleSheet,View } from 'react-native';


export default function App() {
  return (
    <View style={styles.screen}>
        <Header title= "Guess a Number" />
        <GameScreen />

    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
  }
  
});
