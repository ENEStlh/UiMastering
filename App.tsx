
import { StyleSheet, Text, View } from 'react-native';


import PaymentScreen from './src/screens/PaymentScreen';



export default function App() {
  return (
    <View style={styles.container}>
     <PaymentScreen/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
