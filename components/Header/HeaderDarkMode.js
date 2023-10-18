const { StyleSheet } = require("react-native");

export const dark = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: '#1c1c1e',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '8%',
    shadowColor: '#222c50',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    zIndex: 999,
  }
})
