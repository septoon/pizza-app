import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Animated, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'

const SlideButton = () => {
  const [active, setActive] = useState(false)
  let transformX = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (active) {
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
  }, [active]);

  const rotationX = transformX.interpolate({
    inputRange: [0, 1],
    outputRange: [2, Dimensions.get('screen').width / 2]
  })


  return (
    <SafeAreaView style={styles.slideWrapper}>
      <View style={styles.buttonsWrapper}>
        <Animated.View style={{
          position: 'absolute',
          height: 50 - 2*2,
          top: 2,
          bottom: 2,
          borderRadius: 10,
          width: Dimensions.get('screen').width / 2 - 2 - 5*2,
          transform: [
            {
              translateX: rotationX
            }
          ],
          backgroundColor: 'white',
        }} >
        </Animated.View>
        <TouchableOpacity style={styles.slideBtn} onPress={() => setActive(false)}>
          <Text>
            Доставка
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.slideBtn} onPress={() => setActive(true)}>
          <Text>
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
    marginBottom: 20
  },
  buttonsWrapper: {
    flexDirection: 'row',
    position: 'relative',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#efebf0',
    marginHorizontal: 5
  },
  slideBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})