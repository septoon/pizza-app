import { Image, StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require('../../assets/img/text-logo.png')} />
      <View style={styles.basket} >
        <Text style={styles.basketText}>0 ₽</Text>
        <Text style={styles.basketText}>|</Text>
        <Text style={styles.basketText}>0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '8%',
    shadowColor: '#222c50',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    zIndex: 999,
  },
  logo: {
    width: 161.91,
    height: 18,
    opacity: .6
  },
  basket: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fe5f1e',
    width: 130,
    height: 50,
    borderRadius: 10
  },
  basketText: {
    color: '#fff'
  }
});
