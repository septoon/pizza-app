import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Animated, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'

const SlideButton = ({ toggleMode, activeMode }) => {
  let transformX = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (activeMode) {
      Animated.timing(transformX, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start()
    } else {
      Animated.timing(transformX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start()
    }
  }, [activeMode]);

  const rotationX = transformX.interpolate({
    inputRange: [0, 1],
    outputRange: [2, Dimensions.get('screen').width / 2]
  })


  return (
    <SafeAreaView style={styles.slideWrapper}>
      <View style={styles.buttonsWrapper}>
        <Animated.View style={{
          position: 'absolute',
          height: 40 - 2*2,
          top: 2,
          bottom: 2,
          borderRadius: 10,
          width: '46.8%',
          transform: [
            {
              translateX: rotationX
            }
          ],
          backgroundColor: 'white',
        }} >
        </Animated.View>
        <TouchableOpacity style={styles.slideBtn} onPress={toggleMode}>
          <Text style={styles.slideBtnText}>
            Доставка
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.slideBtn} onPress={toggleMode}>
          <Text style={styles.slideBtnText}>
            Самовывоз
        </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default SlideButton

const styles = StyleSheet.create({
  slideWrapper: {
    alignItems: 'center',
    marginBottom: 10
  },
  buttonsWrapper: {
    flexDirection: 'row',
    position: 'relative',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#efebf0',
    marginHorizontal: 0
  },
  slideBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  },
  slideBtnText: {
    fontWeight: '600',
    color: '#fe5f1e'
  }
})