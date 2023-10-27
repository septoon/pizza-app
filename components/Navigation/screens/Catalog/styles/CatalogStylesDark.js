const { StyleSheet } = require("react-native");

export const dark = StyleSheet.create({
  catalogWrapper: {
    backgroundColor: 'black',
    paddingTop: 20,
    width: '100%',
    height: '100%',
  },
  modalIngrWrapper: {
    height: 'auto', 
    borderRadius: 20, 
    backgroundColor: '#151517',
    padding: 20,
    paddingBottom: 30
  },
  ingredientsText: {
    color: '#fff',
    fontSize: 16
  },
});