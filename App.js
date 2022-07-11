import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StoreContext from './src/Context/StoreContext';

export default function App() {
  return (
    <StoreContext>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style='auto' />
      </View>
    </StoreContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
