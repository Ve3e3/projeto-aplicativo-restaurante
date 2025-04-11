import { SafeAreaView, View, StyleSheet, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';

// Importando as telas de cada bebida
import Tequila from './tequila';
import Mezcal from './Mezcal';
import Pulque from './Pulque';
import AguaFresca from './AguaFresca';

const Stack = createStackNavigator();

export default function Bebidas(props) {
  const [Favorito, setFavorito] = useState([
    { id: 1, nome: 'Tequila', tamanho: '50ml', preco: 'R$75,90', descricao: 'Bebida destilada do agave azul, famosa no México, com variações como Blanco, Reposado e Añejo' , imagem: require('../assets/tequilaB.jpg'), favorito: false },
    { id: 2, nome: 'Mezcal', tamanho: '75 ml', preco: 'R$ 84,90', descricao: 'Destilado de agave com sabor defumado, é feito de várias variedades de agave e tem várias formas de envelhecimento.', imagem: require('../assets/Mezcal.jpg'), favorito: false },
    { id: 3, nome: 'Agua Fresca', tamanho: '300 ml', preco: 'R$ 5,90', descricao: 'Bebida mexicana refrescante feita com frutas, água e açúcar, ideal para os dias quentes.', imagem: require('../assets/AguaNatural.jpg'), favorito: false },
    { id: 4, nome: 'Pulque', tamanho: '250 ml', preco: 'R$ 14,90', descricao: 'Bebida tradicional mexicana, fermentada do suco de agave, com textura viscosa e sabor único, muitas vezes aromatizada.', imagem: require('../assets/pulque.jpg'), favorito: false }
  ]);

  const Heart = (id) => {
    const novosCards = Favorito.map(card =>
      card.id === id ? { ...card, favorito: !card.favorito } : card
    );
    
    setFavorito(novosCards);
  };

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Bebidas">
        {(props) => (
          <ScrollView vertical>
            <View style={estilo.container}>
              {Favorito.map((card) => (
                <View key={card.id} style={estilo.cardBebida}>
                  <View style={estilo.coracaoLogo}>
                    <Text style={estilo.textoCard}>{card.nome}</Text>
                    <Text style={estilo.texto}>{card.tamanho}</Text>
                    <Text style={estilo.preco}>{card.preco}</Text>
                    <Text style={estilo.descricao}>{card.descricao}</Text>
                    <Image source={card.imagem} style={estilo.img} />
                  </View>

                  {/* Ícone de coração */}
                  <TouchableOpacity onPress={() => Heart(card.id)} style={estilo.coracao}>
                    <FontAwesome
                      name={card.favorito ? "heart" : "heart-o"}
                      size={20}
                      color={card.favorito ? "red" : "gray"}
                    />
                  </TouchableOpacity>

                  {/* Botão funcional para navegar para as páginas específicas */}
                  <TouchableOpacity
                    style={estilo.botao}
                    onPress={() => props.navigation.navigate(card.nome)} // Navega para o nome da bebida
                  >
                    <Text style={estilo.textoBotao}>Ver Detalhes</Text>
                  </TouchableOpacity>
                </View>
              ))}
              <StatusBar style="auto" />
            </View>
          </ScrollView>
        )}
      </Stack.Screen>

      {/* Definindo as rotas para cada bebida */}
      <Stack.Screen name="Tequila" component={Tequila} />
      <Stack.Screen name="Mezcal" component={Mezcal} />
      <Stack.Screen name="Pulque" component={Pulque} />
      <Stack.Screen name="AguaFresca" component={AguaFresca} />
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
    alignSelf: 'flex-end',
  },
  coracaoLogo: {
    flex: 1,
    marginBottom: 10,
    marginLeft: -2
  },
  cardBebida: {
    flexDirection: 'column', // Mudei para 'column' para que os itens fiquem organizados verticalmente
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
    marginTop: 13,
    alignItems: 'center',
  },
  img: {
    width: 250,
    height: 170,
    marginTop: 10,
    borderRadius: 5,
  },
  botao: {
    backgroundColor: '#f5a623',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 30
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
