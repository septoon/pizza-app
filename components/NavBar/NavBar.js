import React from "react";
import { Button, StyleSheet } from "react-native";
import { View, Text } from "react-native";

export default function NavBar() {
  return(
    <View style={styles.navBarWrapper}>
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