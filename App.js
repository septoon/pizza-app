import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Appearance, View, useColorScheme } from 'react-native';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import NavBar from './components/NavBar/NavBar';
import { Provider } from 'react-redux';
import { store } from './redux/redux-store';

const App = () => {
  const colorScheme = useColorScheme()
  return (
    <Provider store={store}>
      <View style={colorScheme === 'light' ? styles.container : dark.container}>
        <Header />
        <Navigation />
        {/* <NavBar /> */}
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: '14%'
  },
});
const dark = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000',
    paddingTop: '14%'
  },
});

export default App;

