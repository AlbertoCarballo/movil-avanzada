import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.cabecera}>Yeah Boy</Text>
      <Image
        source={require('./assets/yeah-boy.avif')} 
        style={styles.imagen}
      />
      <Text style={styles.textos}>leeeeeroooooooy jenkins</Text>
      <Text style={styles.textos}>alchile no se que mas poner</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>vive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>muere</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 80,
  },
  cabecera: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 20, 
  },
  imagen: {
    width: 250,
    height: 250,
    marginBottom: 20, 
  },
  textos: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button1: {
    backgroundColor: '#00FF00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10, 
  },
  button2: {
    backgroundColor: '#FF0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10, 
  },
  buttonText: {
    color: '#000000',
    fontSize: 24,
    textAlign: 'center',
  },
});
