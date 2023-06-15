import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Navigation />
      <StatusBar style="auto" />
    </View>
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
