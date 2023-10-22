const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
  buttonsWrapper: {
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'relative',
    height: 30,
    width: 200,
    borderRadius: 10,
    backgroundColor: '#eaeaea',
    marginHorizontal: 0,
    marginBottom: 10
  },
  buttonsWrapperDark: {
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'relative',
    height: 30,
    width: 200,
    borderRadius: 10,
    backgroundColor: '#000',
    marginHorizontal: 0,
    marginBottom: 10
  },
  slideBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    
    borderRadius: 5
  },
  slideBtnActive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    backgroundColor: '#1a1a1a',
    borderRadius: 5
  },
  slideBtnText: {
    fontWeight: '600',
    color: '#1a1a1a'
  },
  slideBtnTextActive: {
    fontWeight: '600',
    color: '#efefef'
  }
})