import { SafeAreaView, View, StyleSheet, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';

// Importando as telas de cada prato
import Enchiladas from './Enchiladas';
import Guacamole from './Guacamole';
import Quesadilla from './Quesadilla';
import Tacos from './Tacos';

const Stack = createStackNavigator();

export default function Comidas(props) {
  const [Favorito, setFavorito] = useState([
    { id: 1, nome: 'Enchiladas', tamanho: '2-3 pessoas', preco: 'R$39,90', descricao: 'Tortilhas de milho recheadas com carne ou frango, cobertas com molho de pimenta e queijo, depois assadas. É um prato saboroso e picante.', imagem: require('../assets/Enchiladas.jpg'), favorito: false },
    { id: 2, nome: 'Guacamole', tamanho: '4-6 pessoas', preco: 'R$ 20,90', descricao: 'Um molho feito com abacate amassado, cebola, tomate, coentro, suco de limão e pimenta. Geralmente servido com chips de tortilha como aperitivo.', imagem: require('../assets/Guacamole.jpg'), favorito: false },
    { id: 3, nome: 'Quesadilla', tamanho: '1-2 pessoas', preco: 'R$ 15,90', descricao: 'Tortilha de trigo ou milho recheada com queijo derretido e, frequentemente, carne, frango ou cogumelos. É simples, mas saborosa.', imagem: require('../assets/Quesadilla.jpg'), favorito: false },
    { id: 4, nome: 'Tacos al Pastor', tamanho: '2-3 pessoas', preco: 'R$ 25,90', descricao: 'Tortilhas de milho recheadas com carne de porco marinada, assada em um espeto vertical (como shawarma), geralmente servidas com abacaxi, cebola, coentro e molho de pimenta.', imagem: require('../assets/Tacos.jpg'), favorito: false }
  ]);

  const Heart = (id) => {
    const novosCards = Favorito.map(card =>
      card.id === id ? { ...card, favorito: !card.favorito } : card
    );
    setFavorito(novosCards);
  };

  return (
    <Stack.Navigator initialRouteName="Home">

      <Stack.Screen name="Home">
        {(props) => (
          <ScrollView vertical>
            <View style={estilo.container}>
              <Text style={estilo.mexico}>Comida Mexicana </Text>
              {Favorito.map((card) => (
                <TouchableOpacity
                  key={card.id}
                  onPress={() => props.navigation.navigate(card.nome)} // Navegação para a página de detalhes
                >
                  <View style={estilo.cardBebida}>
                    <View style={estilo.coracaoLogo}>
                      <Text style={estilo.textoCard}>{card.nome}</Text>
                      <Text style={estilo.texto}>{card.tamanho}</Text>
                      <Text style={estilo.preco}>{card.preco}</Text>
                      <Text style={estilo.descricao}>{card.descricao}</Text>
                      <Image source={card.imagem} style={estilo.img} />
                    </View>
                    <TouchableOpacity onPress={() => Heart(card.id)} style={estilo.coracao}>
                      <FontAwesome
                        name={card.favorito ? "heart" : "heart-o"}
                        size={20}
                        color={card.favorito ? "red" : "gray"}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              ))}
              <StatusBar style="auto" />
            </View>
          </ScrollView>
        )}
      </Stack.Screen>

      {/* Definindo as rotas para cada comida */}
      <Stack.Screen name="Enchiladas" component={Enchiladas} />
      <Stack.Screen name="Guacamole" component={Guacamole} />
      <Stack.Screen name="Quesadilla" component={Quesadilla} />
      <Stack.Screen name="Tacos" component={Tacos} />

    </Stack.Navigator>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
    color: 'white',
    paddingTop: 50,
    justifyContent: 'center',
  },
  mexico: {
    fontSize: 40,  
    color: '#FFD700',  
    margin: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,  
    textShadowColor: '#FF4500',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  textoCard: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold'
  },
  texto: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
    fontWeight: 'bold'
  },
  preco: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'red',
    marginTop: 5,
  },
  coracao: {
    padding: 1,
    marginTop: -50,
  },
  coracaoLogo: {
    flex: 1,
  },
  cardBebida: {
    flexDirection: 'row',
    backgroundColor: '#98a851',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    fontWeight: 'bold',
    width: 320,
    alignItems: 'center',
    marginTop: 13,
    shadowOpacity: 8,
    marginBottom: 30,
  },
  img: {
    width: 250,
    height: 170,
    marginTop: 10,
    borderRadius: 5,
  },
});