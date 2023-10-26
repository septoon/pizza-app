import React from 'react'
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { ingredientsList } from '../../../../assets/json/ingredients'

const IngredientsModal = ({isModalActive, setIsModalActive}) => {
  return (
    <Modal presentationStyle="pageSheet"
          isModalInPresentation={true}
          visible={isModalActive}>
      <View>
        <Pressable type="submit" style={styles.formBackBtn} onPress={setIsModalActive(false)}>
          <Text style={styles.formBackBtnText}>Закрыть</Text>
        </Pressable>
        {
          ingredientsList.map((item, index) => {
            return (
              <View key={index}>
                <Text>{item.nameIngr}</Text>
                <View>
                  <Text>{Item.priceIngr}</Text>
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