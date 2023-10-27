const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
  catalogWrapper: {
    paddingTop: 20,
    width: '100%',
    height: '100%',
  },

  modalIngrWrapper: {
    height: 'auto', 
    borderRadius: 20, 
    backgroundColor: '#fff',
    padding: 10,
    paddingBottom: 30
  },
  modalCloseBtn: {
    width: 60,
    height: 8,
    borderRadius: 5,
    backgroundColor: 'gray',
    opacity: 0.3,
    alignSelf: 'center',
    marginBottom: 20
  },
  ingredientsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  ingredientsPriceAdd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 80
  },
  ingredientsText: {
    fontSize: 16,
    color: '#000'
  },
  ingredientsPriceText: {
    fontWeight: 700
  },
  addIngredientsBtn: {
    width: 25,
    height: 25,
    opacity: 1
  },
  addIngredientsBtnPressed: {
    width: 25,
    height: 25,
    opacity: 0.5
  }
});

