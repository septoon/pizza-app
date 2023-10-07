const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
  pizzaBlockImage: {
    width: 50,
    height: 50
  },
  closeCart: {
    width: 15,
    height: 15
  },
  cartItem: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  }
});