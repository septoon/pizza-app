import { createRef, useState } from 'react';
import { Button, Image, Pressable, Text, View, useColorScheme } from 'react-native';
import { styles } from './styles/CatalogItemStyles';
import { dark } from './styles/CatalogItemStylesDark';


export default function CatalogItem({ id, image, title, composition, prices, isChange, onClickAddPizza }) {
  const priceHolder = createRef()
  const colorScheme = useColorScheme();
  const [activeSize, setActiveSize] = useState('30 см')
  const [activePrice, setActivePrice] = useState(prices[0])
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const [selectedButton, setSelectedButton] = useState(1);

  const onAddPizza = () => {
    const obj = {
      id, title, image, activePrice, activeSize
    }
    onClickAddPizza(obj)
  }
  return (
    <View style={colorScheme === 'light' ? styles.catalogItem : dark.catalogItem}>
      <View style={styles.catalogItemBlock}>
        <Image source={{
          uri: image
        }} style={styles.image} />
        <Text style={colorScheme === 'light' ? styles.name : dark.name}>{title}</Text>
        <Text style={colorScheme === 'light' ? styles.description : dark.description}>Состав: {composition}</Text>
      </View>

      <View style={styles.catalogItemBlock}>
        <View style={styles.size}>
          <Pressable style={[
            colorScheme === 'light' ? styles.sizeItem : dark.sizeItem,
            selectedButton === 1 ? styles.sizeItemActive : null,
          ]} onPress={(e) => {
              isChange = true
              setSelectedButton(1)
              setActivePrice(prices[0])
              setActiveSize('30 см')
              setIsButtonPressed(false);
          }}>
            <Text style={colorScheme === 'light' ? styles.sizeText : dark.sizeText}>Ø 30см</Text>
          </Pressable>
          <Pressable style={[
            colorScheme === 'light' ? styles.sizeItem : dark.sizeItem,
            selectedButton === 2 ? styles.sizeItemActive : null,
          ]} onPress={(e) => {
              isChange = true
              setSelectedButton(2)
              setActivePrice(prices[1])
              setActiveSize('40 см')
              setIsButtonPressed(false);
          }}>
            <Text style={colorScheme === 'light' ? styles.sizeText : dark.sizeText}>Ø 40см</Text>
          </Pressable>
          <Pressable style={[
            colorScheme === 'light' ? styles.sizeItem : dark.sizeItem,
            selectedButton === 3 ? styles.sizeItemActive : null,
          ]} onPress={(e) => {
              isChange = true
              setSelectedButton(3)
              setActivePrice(prices[2])
              setActiveSize('50 см')
              setIsButtonPressed(false);
          }}>
            <Text style={colorScheme === 'light' ? styles.sizeText : dark.sizeText}>Ø 50см</Text>
          </Pressable>
        </View>

        <Text style={colorScheme === 'light' ? styles.packingItem : dark.packingItem}>+40₽ к стоимости, за упаковку</Text>
        <Button style={styles.ingredients} title='Добавить ингредиенты' />

        <View style={styles.priceHolder}>
          <Text ref={priceHolder} style={colorScheme === 'light' ? styles.priceCount : dark.priceCount}>{activePrice} ₽</Text>
          <Pressable  style={[styles.btnOrder, isButtonPressed && styles.btnOrderPressed]} onPress={() => {
            onAddPizza();
            isButtonPressed ? setTimeout(() => {
              setIsButtonPressed(false);
              setTimeout(() => {
              setIsButtonPressed(true);
              }, 100)
            }, 0) : 
              setIsButtonPressed(true);
          }}>
            <Text style={[styles.btnOrderText, isButtonPressed && styles.btnOrderTextPressed]}>+ Добавить</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
