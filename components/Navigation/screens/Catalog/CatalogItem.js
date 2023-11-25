import { createRef, useState } from 'react';
import { Button, Image, Pressable, Text, View, useColorScheme } from 'react-native';
import { styles } from './styles/CatalogItemStyles';
import { dark } from './styles/CatalogItemStylesDark';


export default function CatalogItem({ id, image, title, composition, prices, isChange, onClickAddPizza, setIsModalActive, ingredientsData, ingredientsCount, ingredientsPrice }) {
  const priceHolder = createRef()
  const colorScheme = useColorScheme();
  const [activeSize, setActiveSize] = useState('30 см')
  const [activePrice, setActivePrice] = useState(prices[0])
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const [selectedButton, setSelectedButton] = useState(1);

  const totalPriceWithIngrs = parseInt(activePrice) + ingredientsPrice

  const onAddIngredients = () => {
    
  }

  const uniqueIngredients = ingredientsData.reduce((acc, current) => {
    const isDuplicate = acc.find(
      (item) => item.id === current.id,
    );
    if (!isDuplicate) {
      acc.push(current);
    }
    return acc;
  }, []);

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
        <View style={colorScheme === 'light' ? styles.packingItem : dark.packingItem}>
          <Text style={{
            color: colorScheme === 'light' ? 'gray' : '#fff',
            textAlign: 'center',
          }}>+40₽ к стоимости, за упаковку</Text>
        </View>
        <View style={styles.ingredientsWrapper}>
          <Pressable style={colorScheme === 'light' ? styles.ingredientsBtn : dark.ingredientsBtn} onPress={() => { 
            setIsModalActive(true) 
            onAddIngredients()
            }}>
            <Text style={{
              color: colorScheme === 'light' ? '#000' : '#fff', fontSize: 16,
              textAlign: 'center',
            }}>Добавить ингредиенты</Text>
          </Pressable>
          <View style={styles.ingredientsItemsWrapper}>
          {
              uniqueIngredients.map((item, index) => {
                return (
                  <View key={index} style={styles.ingredientsItem}>
                    <Text style={colorScheme === 'light' ? styles.ingredientsItemText : dark.ingredientsItemText}>{item.nameIngr}</Text>
                    <View style={styles.ingredientsItemCount}>
                      <Text style={styles.ingredientsItemCountText}>{ingredientsCount}</Text>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </View>
        <View style={styles.priceHolder}>
          <Text ref={priceHolder} style={colorScheme === 'light' ? styles.priceCount : dark.priceCount}>{totalPriceWithIngrs} ₽</Text>
          <Pressable style={[styles.btnOrder, isButtonPressed && styles.btnOrderPressed]} onPress={() => {
            onAddPizza();
          }} onPressIn={() => setIsButtonPressed(true)} onPressOut={() => setIsButtonPressed(false)}>
            <Text style={[styles.btnOrderText, isButtonPressed && styles.btnOrderTextPressed]}>+ Добавить</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
