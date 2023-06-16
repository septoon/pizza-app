import { createRef, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function CatalogItem({ id, image, title, composition, prices, isChange, onClickAddPizza }) {
  const priceHolder = createRef()

  const [activeSize, setActiveSize] = useState('30 см')
  const [activePrice, setActivePrice] = useState(prices[0])

  const onAddPizza = () => {
    const obj = {
      id, title, image, activePrice, activeSize
    }
    onClickAddPizza(obj)
  }
  return (
    <View style={styles.catalogItem}>
      <View style={styles.catalogItemBlock}>
        <Image source={{
          uri: image
        }} style={styles.image} />
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.description}>Состав: {composition}</Text>
      </View>

      <View style={styles.catalogItemBlock}>
        <View style={styles.size}>
          <Button onPress={(e) => {
              isChange = true
              setActivePrice(prices[0])
              setActiveSize('30 см')
            }} style={styles.sizeItem} title='Ø 30см' />
          <Button onPress={(e) => {
              isChange = true
              setActivePrice(prices[1])
              setActiveSize('40 см')
            }} style={styles.sizeItem} title='Ø 40см' />
          <Button onPress={(e) => {
              isChange = true
              setActivePrice(prices[2])
              setActiveSize('50 см')
            }} style={styles.sizeItem} title='Ø 50см' />
        </View>

        <Text style={styles.packingItem}>+40₽ к стоимости, за упаковку</Text>
        <Button style={styles.ingredients} title='Добавить ингредиенты' />

        <View style={styles.priceHolder}>
          <Text ref={priceHolder} style={styles.priceCount}>{activePrice} ₽</Text>
          <Button onPress={ onAddPizza } style={styles.btnOrder} title='+ Добавить' />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  catalogItem: {
    width: '95%',
  },
  catalogItemBlock: {
    width: '100%',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 250,
  },
  name: {
    fontSize: 18
  },
  size: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  sizeItem: {
    flex: 1,
    color: '#4f4d55',
    borderWidth: 1,
    borderColor: '#4f4d55',
  },
  packingItem: {
    width: '100%',
    textAlign: 'center',
    padding: 5,
    borderRadius: 15,
    backgroundColor: '#eee'
  },
  priceHolder: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});