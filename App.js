import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import NavBar from './components/NavBar/NavBar';
import { Provider } from 'react-redux';
import { store } from './redux/redux-store';

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <Navigation />
        {/* <NavBar /> */}
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: '14%'
  },
});
