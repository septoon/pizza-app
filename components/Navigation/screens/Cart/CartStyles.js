import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cartWrapper: {
    width: '95%',
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentItems: {
    width: '100%',
    height: '50%'
  },
  emptyCart: {
    
  },
  btnCartOrder: {
    width: '100%',
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
  backBtnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
