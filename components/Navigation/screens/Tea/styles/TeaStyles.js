const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
  teaCardWrapper: {
    flex: 1,
    paddingHorizontal: 10
  },
  teaCardTitle: {
    fontSize: 22
  },
  cardItem: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardItemTextTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: '#000',
    marginBottom: 10
  },
  cardItemText: {
    color: '#000',
    textAlign: 'center'
  }
});