import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function CatalogItem() {
  return (
    <View style={styles.catalogItem}>
      <View style={styles.catalogItemBlock}>
        <Image source={{
          width: 100,
          height: 250,
          uri: 'https://user36270.clients-cdnnow.ru/1661934256270-350x234.jpeg'
        }} style={styles.image} />
        <Text style={styles.name}>Пицца с тунцом</Text>
        <Text style={styles.description}>тунец, сыр пармезан, соус, оливки, помидоры</Text>
      </View>

      <View style={styles.catalogItemBlock}>
        <View style={styles.size}>
          <Button style={styles.sizeItem} title='30см' />
          <Button style={styles.sizeItem} title='40см' />
          <Button style={styles.sizeItem} title='50см' />
        </View>

        <Text style={styles.packingItem}>+40₽ к стоимости, за упаковку</Text>
        <Button style={styles.ingredients} title='Добавить ингредиенты' />

        <View style={styles.priceHolder}>
          <Text style={styles.priceCount}>400 ₽</Text>
          <Button style={styles.btnOrder} title='Добавить' />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  catalogWrapper: {
    backgroundColor: '#fff',
  },
});