const { StyleSheet } = require("react-native");

export const dark = StyleSheet.create({
  emailForm: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    alignSelf: 'center',
    backgroundColor: '#efeff4',
    paddingTop: 60,
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  modalHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fe5f1e',
  },
  formBackBtn: {
    marginBottom: 0
  },
  formBackBtnText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500'
  },
  modalHeaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
  },
  unvisibleText: {
    color: 'transparent',
    fontSize: 17,
    fontWeight: '500'
  },
  emailFormWrapper: {
    height: '100%',
  },
  orderListWrapper: {
    maxHeight: '20%'
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 20
  },
  formTotalPrice: {
    fontWeight: 600
  },
  formTotalPriceSum: {
    fontSize: 16,
    fontWeight: 700,
    color: 'orange'
  },
  formText: {
    fontSize: 16,
    marginVertical: 10
  },
  orderInput: {
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fefeff',
    paddingLeft: 10
  },
  payment: {
    width: '100%',
  },
  btnOrder: {
    position: 'absolute',
    bottom: 90,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fe5f1e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 18,
    elevation: 3,
    borderRadius: 10
  },
  btnOrderText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 600,
    letterSpacing: 0.25,
    color: 'white',
  },
});