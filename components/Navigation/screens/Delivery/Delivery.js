import React from 'react'

import { deliveryList } from '../../../../assets/json/delivery-list';
import { ScrollView, Text, View, useColorScheme } from 'react-native';
import { styles } from './styles/DeliveryStyles';
import { dark } from './styles/DeliveryStylesDark';

export default function Delivery() {
  const colorScheme = useColorScheme()
  const DeliveryMap = () => {
    return deliveryList.map((i) => {
      return (
        <View style={colorScheme === 'light' ? styles.delivery_listItem : dark.delivery_listItem} key={i.id}>
          <Text style={colorScheme === 'light' ? styles.delivery_listItemText : dark.delivery_listItemText}>{i.city}</Text>
          <Text style={colorScheme === 'light' ? styles.delivery_listItemText : dark.delivery_listItemText}>{i.price}</Text>
        </View>
      )
    })
  }
  
  return (
    <ScrollView style={colorScheme === 'light' ? styles.deliveryMain : dark.deliveryMain}>
      <View style={colorScheme === 'light' ? styles.deliveryList : dark.deliveryList}>
        <Text style={colorScheme === 'light' ? styles.deliveryTitle : dark.deliveryTitle}>Доставка</Text>
          { DeliveryMap() }
      </View>
    </ScrollView>
  )
}
