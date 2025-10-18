
import { StyleSheet, Text, View } from 'react-native';

import MeditationScreen from './src/screens/MeditationScreen';



export default function App() {
  return (
    <View style={styles.container}>
      <MeditationScreen/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
