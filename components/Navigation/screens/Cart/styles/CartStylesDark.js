import { StyleSheet } from "react-native";

export const dark = StyleSheet.create({
  cartWrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  content: {
    flex: 1
  },
  containerCart: {
    flex: 1
  },
  cart: {
    flex: 1,
  },
  cartClear: {
    flexDirection: 'row',
    marginBottom: 10
  },
  cartClearIcon: {
    width: 20,
    height: 20
  },
  cartClearText: {
    color: '#b6b6b6',
  },
  contentItems: {
    width: '100%',
    height: '80%',
    marginBottom: 10
  },
  cartBottomDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  payBtn: {
    justifySelf: 'flex-end'
  },
  cartTotalCount: {
    fontWeight: 600,
    color: '#fff'
  },
  cartTotalPrice: {
    fontWeight: 600,
    color: '#fff'
  },
  cartTotalCountSum: {
    fontSize: 16,
    fontWeight: 700
  },
  cartTotalPriceSum: {
    fontSize: 16,
    fontWeight: 700,
    color: 'orange'
  },
  btnCartOrder: {
    width: '90%',
    alignSelf: 'center',
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
  cartOrderBtnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  emptyCart: {
    marginTop: 20,
  },
  emptyCartTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 700,
  },
  emptyCartText: {
    color: '#fff',
    marginBottom: 30
  },
  emptyCartLogoContainer: {
    width: '100%',
    height: 150,
    marginBottom: 30,
  },
  toMainBtn: {
    borderWidth: 2,
    borderColor: '#fe5f1e',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fe5f1e',
  },
});
