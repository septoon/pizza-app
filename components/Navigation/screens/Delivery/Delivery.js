import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { deliveryList } from '../../../../assets/json/delivery-list';

export default function Delivery() {
  const DeliveryMap = () => {
    return deliveryList.map((i) => {
      return (
        <View style={styles.delivery_listItem} key={i.id}>
          <Text>{i.city}</Text>
          <Text>{i.price}</Text>
      </View>
      )
    })
  }
  
  return (
    <View style={styles.deliveryMain}>
      <View style={styles.deliveryList}>
        <Text style={styles.deliveryTitle}>Доставка</Text>
          { DeliveryMap() }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})