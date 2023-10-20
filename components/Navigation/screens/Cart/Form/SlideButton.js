import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Animated, TouchableOpacity, SafeAreaView, Dimensions, Pressable } from 'react-native'

const SlideButton = ({ toggleMode, orderType }) => {

  return (
      <View style={styles.buttonsWrapper}>
        <Pressable style={  [
          styles.slideBtn,
          orderType === 'Доставка' ? styles.slideBtnActive : null,
        ]} onPress={toggleMode}>
          <Text style={[
          styles.slideBtnText,
          orderType === 'Доставка' ? styles.slideBtnTextActive : null,
        ]}>
            Доставка
        </Text>
        </Pressable>
        <Pressable style={  [
          styles.slideBtn,
          orderType === 'Самовывоз' ? styles.slideBtnActive : null,
        ]} onPress={toggleMode}>
          <Text style={[
          styles.slideBtnText,
          orderType === 'Самовывоз' ? styles.slideBtnTextActive : null,
        ]}>
            Самовывоз
        </Text>
        </Pressable>
      </View>
  )
}
export default SlideButton

const styles = StyleSheet.create({
  buttonsWrapper: {
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'relative',
    height: 30,
    width: 200,
    borderRadius: 10,
    backgroundColor: '#000',
    marginHorizontal: 0,
    marginBottom: 10
  },
  slideBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    
    borderRadius: 5
  },
  slideBtnActive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    backgroundColor: '#efefef',
    borderRadius: 5
  },
  slideBtnText: {
    fontWeight: '600',
    color: '#efefef'
  },
  slideBtnTextActive: {
    fontWeight: '600',
    color: '#1a1a1a'
  }
})