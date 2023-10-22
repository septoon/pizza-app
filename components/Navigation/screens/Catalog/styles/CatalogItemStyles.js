import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  catalogItem: {
    width: '95%',
    marginBottom: 20,
    padding: 10,
    shadowColor: '#222c50',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    border: 0,
    borderRadius: 15,
    backgroundColor: 'white',
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
    fontSize: 24,
    fontWeight: 800,
    marginBottom: 10,
  },
  description: {
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
    borderColor: 'antiquewhite',
    backgroundColor: 'floralwhite'
  },
  sizeItemActive: {
    backgroundColor: '#FFDF8C'
  },
  sizeText: {
    color: '#4f4d55',
  },
  priceCount: {
    fontSize: 24
  },
  packingItem: {
    width: '100%',
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'floralwhite'
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