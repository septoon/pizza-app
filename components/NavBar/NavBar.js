import React from "react";
import { Button, StyleSheet, useColorScheme } from "react-native";
import { View, Text } from "react-native";

export default function NavBar() {
  const colorScheme = useColorScheme()
  return(
    <View style={colorScheme === 'light' ? styles.navBarWrapper : dark.navBarWrapper}>
      <Button color='#fff' title='Menu' />
      <Button color='#fff' title='Tea' />
      <Button color='#fff' title='Delivery' />
      <Button color='#fff' title='Cart' />
    </View>
  )
}

const styles = StyleSheet.create({
  navBarWrapper: {
    width: '100%',
    height: 100,
    marginBottom: 20,
    backgroundColor: '#db082e',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

const dark = StyleSheet.create({
  navBarWrapper: {
    width: '100%',
    height: 100,
    marginBottom: 20,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})