const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
  pizzaBlockImage: {
    width: 50,
    height: 50
  },
  closeCart: {
    width: 25,
    height: 25
  },
  cartItem: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  }
});