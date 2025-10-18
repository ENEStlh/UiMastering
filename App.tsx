
import { StyleSheet, Text, View } from 'react-native';
import ContactUsScreen from './src/screens/ContactUsScreen';



export default function App() {
  return (
    <View style={styles.container}>
      <ContactUsScreen/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
