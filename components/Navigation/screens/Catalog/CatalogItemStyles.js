import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  catalogItem: {
    width: '95%',
    marginBottom: 20
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
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
    color: '#4f4d55',
    borderWidth: 1,
    borderColor: '#4f4d55',
  },
  priceCount: {
    fontSize: 24
  },
  packingItem: {
    width: '100%',
    textAlign: 'center',
    padding: 5,
    borderRadius: 15,
    backgroundColor: '#eee'
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
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});