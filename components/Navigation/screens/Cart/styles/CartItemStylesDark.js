const { StyleSheet } = require("react-native");

export const dark = StyleSheet.create({
  cartItem: {
    flex: 1,
    width: '98%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'hsla(0,0%,80%,.15)',
    marginBottom: 5,
    borderRadius: 10
  },
  pizzaBlockImage: {
    width: 60,
    height: 50
  },
  cartItemInfo: {
    width: '40%',
  },
  titleText: {
    color: 'white',
    fontWeight: 700,
  },
  cartItemCountText: {
    color: 'white',
    fontWeight: 700
  },
  priceText: {
    color: 'white',
    fontWeight: 700
  },
  closeCart: {
    width: 25,
    height: 25
  },
  sizeText: {
    color: '#b6b6b6'
  }
});