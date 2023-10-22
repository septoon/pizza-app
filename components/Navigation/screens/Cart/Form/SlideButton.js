import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { styles } from './styles/SlideButtonStyles'
import { dark } from './styles/SlideButtonStylesDark'

const SlideButton = ({ colorScheme, toggleMode, orderType }) => {

  return (
      <View style={colorScheme === 'light' ? styles.buttonsWrapper : dark.buttonsWrapper}>
        <Pressable style={[
          colorScheme === 'light' ? styles.slideBtn : dark.slideBtn,
          orderType === 'Доставка' ? styles.slideBtnActive : null,
        ]} onPress={toggleMode}>
          <Text style={[
          colorScheme === 'light' ? styles.slideBtnText : dark.slideBtnText,
          orderType === 'Доставка' ? styles.slideBtnTextActive : null,
        ]}>
            Доставка
        </Text>
        </Pressable>
        <Pressable style={[
          colorScheme === 'light' ? styles.slideBtn : dark.slideBtn,
          orderType === 'Самовывоз' ? styles.slideBtnActive : null,
        ]} onPress={toggleMode}>
          <Text style={[
          colorScheme === 'light' ? styles.slideBtnText : dark.slideBtnText,
          orderType === 'Самовывоз' ? styles.slideBtnTextActive : null,
        ]}>
            Самовывоз
        </Text>
        </Pressable>
      </View>
  )
}
export default SlideButton
