import React from 'react'
import {  Pressable, StyleSheet, Text, View } from 'react-native'
import { ingredientsList } from '../../../../assets/json/ingredients'
import Modal from 'react-native-modal'

const IngredientsModal = ({isModalActive, setIsModalActive}) => {
  return (
    <Modal isVisible={isModalActive}
    onSwipeComplete={() => setIsModalActive(false)}
    swipeDirection="down"
    style={{ margin: 0, justifyContent: 'flex-end' }}>
      <View style={{marginTop: 150, borderRadius: 20}}>
        <Pressable type="submit" style={styles.formBackBtn} onPress={ setIsModalActive(false) }>
          <Text style={styles.formBackBtnText}>Закрыть</Text>
        </Pressable>
        {
          ingredientsList.map((item, index) => {
            return (
              <View key={index}>
                <Text>{item.nameIngr}</Text>
              <View>
                <Text>{item.priceIngr}</Text>
                <Pressable>
                  <Text>+</Text>
                </Pressable>
              </View>
            </View>
            )
          })
        }
     
      </View>
    </Modal>
  )
}

export default IngredientsModal

const styles = StyleSheet.create({

})