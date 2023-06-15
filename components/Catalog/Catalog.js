import { StyleSheet, Text, View } from 'react-native';
import CatalogItem from './CatalogItem';

export default function Catalog() {
  return (
    <View style={styles.catalogWrapper}>
      <CatalogItem />
    </View>
  );
}

const styles = StyleSheet.create({
  catalogWrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
});
