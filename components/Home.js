import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
 
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
       
        <ImageBackground source={require("../assets/Tacos.jpg")} style={styles.ImageBackground}>
          <View style={styles.card}>
            <Text style={styles.titulo}>MexoLoco</Text>
          </View>
        </ImageBackground>
 
       
        <Text style={styles.text1}>Um Pouco Sobre Nós:</Text>
        <Text style={styles.text}>
          Nosso aplicativo foi criado para amantes da comida mexicana que buscam novas receitas, dicas de restaurantes e informações sobre os pratos mais tradicionais do México. Se você é fã de tacos, guacamole, quesadillas, churros ou está apenas curioso para conhecer mais sobre os pratos típicos dessa cozinha maravilhosa, este é o lugar certo!
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1C',
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 5,
    padding: 16,
    width: 250,
    marginLeft: 90,
    marginTop: 30,
    opacity: 0.9,
   
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFA500',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowRadius: 4,
  },
  ImageBackground: {
    width: '100%',
    height: 755,
  },
  ImageBackgroundPrato: {
    width: '100%',
    height: 700,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginTop: 30,
    marginHorizontal: 20,
    color: 'black',
    textShadowColor: '#000',
    textShadowRadius: 4,
    lineHeight: 30,
    backgroundColor: '#DCDCDC',
    padding: 10,
    borderRadius: 8,
    marginBottom: 50,
  },
  text1: {
    fontSize: 22,
    marginTop: 70,
    marginHorizontal: 20,
    color: '#FF4500',
    textShadowColor: '#000',
    textShadowRadius: 3,
    lineHeight: 30,
    backgroundColor: '#DCDCDC',
    padding: 10,
    borderRadius: 8,
    marginBottom:20,
  },
  cards: {
    backgroundColor: '#1C1C1C',
    width: '100%',
    paddingBottom: 50,
  },
  pratos: {
    fontSize: 40,
    textAlign: 'center',
    color: '#FFA500',
    marginTop: 50,
    marginLeft:30,
    marginRight:30,
    marginBottom:40,
  },
});
 
 