const { StyleSheet } = require("react-native");

export const dark = StyleSheet.create({
  teaCardWrapper: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 10
  },
  teaCardTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: '#fff'
  },
  cardItemTextTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: '#fff',
    marginBottom: 10
  },
  cardItemText: {
    color: '#fff',
    textAlign: 'center'
  }
});