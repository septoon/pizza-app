import React from 'react'
import { Button, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import teaCardList from '../../../../assets/json/teaCardList';
import { styles } from './styles/TeaStyles';
import { dark } from './styles/TeaStylesDark';

export default function Tea() {
  const colorScheme = useColorScheme()
  const cardDataKeys = Object.keys(teaCardList)
  
  const teaCardMap = () => {
    return cardDataKeys.map((c, index) => {
      return (
        <View style={styles.teaCardWrapper} key={index}>
          {
            teaCardList[c].map((el, index) => (
              <View style={styles.cardItems} key={index} >
                <Text style={colorScheme === 'light' ? styles.teaCardTitle : dark.teaCardTitle}>{el.header}</Text>
                <View style={styles.cardItem}>
                    <Text style={colorScheme === 'light' ? styles.cardItemTextTitle : dark.cardItemTextTitle}>{el.title}</Text>
                    <Text style={colorScheme === 'light' ? styles.cardItemText : dark.cardItemText}>{el.description}</Text>
                </View>
              </View>
            ))
          }
        </View>
      );
    })
  }
  return (
    <ScrollView style={colorScheme === 'light' ? styles.teaCardWrapper : dark.teaCardWrapper}>
      { teaCardMap() }
    </ScrollView>
  );
}
