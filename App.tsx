
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './src/screens/IntroScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <IntroScreen/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
