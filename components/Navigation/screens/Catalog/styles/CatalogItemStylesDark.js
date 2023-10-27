import { StyleSheet } from "react-native";

export const dark = StyleSheet.create({
  catalogItem: {
    width: '100%',
    marginBottom: 0,
    padding: 10,
    border: 0,
    backgroundColor: 'black',
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
    color: 'white',
    fontSize: 24,
    fontWeight: 800,
    marginBottom: 10,
  },
  description: {
    color: 'white',
    marginBottom: 10,
    fontSize: 14
  },
  independent: {
    marginBottom: 30,
  },
  size: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  sizeItem: {
    flex: 1,
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#2c2b2f',
    backgroundColor: '#39383d'
  },
  sizeItemActive: {
    backgroundColor: '#b1a5a5'
  },
  sizeText: {
    color: 'white',
  },
  priceCount: {
    color: 'white',
    fontSize: 24,
    fontWeight: 700
  },
  packingItem: {
    width: '100%',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#39383d'
  },
  ingredientsWrapper: {
    width: '100%',
  },
  ingredientsBtn: {
    width: '100%',
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#39383d'
  },
  priceHolder: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnOrder: {
    backgroundColor: '#fe5f1e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 4,
    elevation: 3,
    fontWeight: 400,
    fontSize: 12,
    borderRadius: 10
  },
  btnOrderText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  btnOrderPressed: {
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#fe5f1e',
    backgroundColor: 'transparent',
  },
  btnOrderTextPressed: {
    color: '#fe5f1e',
  },
});