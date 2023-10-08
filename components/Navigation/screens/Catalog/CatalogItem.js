import { createRef, useState } from 'react';
import { Button, Image, Pressable, Text, View } from 'react-native';
import { styles } from './CatalogItemStyles';

export default function CatalogItem({ id, image, title, composition, prices, isChange, onClickAddPizza }) {
  const priceHolder = createRef()

  const [activeSize, setActiveSize] = useState('30 см')
  const [activePrice, setActivePrice] = useState(prices[0])

  const [selectedButton, setSelectedButton] = useState(1);

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
          <Pressable style={[
            styles.sizeItem,
            selectedButton === 1 ? styles.sizeItemActive : null,
          ]} onPress={(e) => {
              isChange = true
              setSelectedButton(1)
              setActivePrice(prices[0])
              setActiveSize('30 см')
          }}>
            <Text style={styles.sizeText}>Ø 30см</Text>
          </Pressable>
          <Pressable style={[
            styles.sizeItem,
            selectedButton === 2 ? styles.sizeItemActive : null,
          ]} onPress={(e) => {
              isChange = true
              setSelectedButton(2)
              setActivePrice(prices[1])
              setActiveSize('40 см')
          }}>
            <Text style={styles.sizeText}>Ø 40см</Text>
          </Pressable>
          <Pressable style={[
            styles.sizeItem,
            selectedButton === 3 ? styles.sizeItemActive : null,
          ]} onPress={(e) => {
              isChange = true
              setSelectedButton(3)
              setActivePrice(prices[2])
              setActiveSize('50 см')
          }}>
            <Text style={styles.sizeText}>Ø 50см</Text>
          </Pressable>
        </View>

        <Text style={styles.packingItem}>+40₽ к стоимости, за упаковку</Text>
        <Button style={styles.ingredients} title='Добавить ингредиенты' />

        <View style={styles.priceHolder}>
          <Text ref={priceHolder} style={styles.priceCount}>{activePrice} ₽</Text>
          <Pressable style={styles.btnOrder} onPress={ onAddPizza }>
            <Text style={styles.text}>+ Добавить</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
