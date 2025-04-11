import { SafeAreaView, View, StyleSheet, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

export default function tequila() {
    const [Favorito, setFavorito] = useState([
        {
            id: 1, imagem: require('../assets/tequilaB.jpg'), nome: 'Tequila', tamanho: '50ml', preco: 'R$75,90', descricao: 'A tequila é uma bebida alcoólica destilada originária do México, feita a partir da planta de agave azul (Agave tequilana). Ela é produzida principalmente nas regiões de Jalisco e algumas áreas vizinhas. A produção envolve a colheita da "piña" (o coração da planta), que é cozida para converter os amidos em açúcares fermentáveis. A mistura resultante é fermentada e depois destilada.', favorito: false },
  ]);

    const Heart = (id) => {
        const novosCards = Favorito.map(card =>
            card.id === id ? { ...card, favorito: !card.favorito } : card
        );
        setFavorito(novosCards);
    };

    return (
        <ScrollView vertical style={estilo.fundo}>
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
                        </View>
                  
                ))}
                <StatusBar style="auto" />
            </View>
        </ScrollView>

    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        color: 'white',
        paddingTop: 50,
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 35,
        textAlign: 'left',
        color: "#ftj8h",
        textDecorationColor: 'bold',
        margin: 24,
        paddingleft: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    paragraph: {
        color: 'black',
        marginTop: 5,
        padding: 15,
        marginBottom: 5,
        fontSize: 500,
        fontFamily: 'Robot'
    },
    textoCard: {
        fontSize: 50,
        color: '#333',
    },
    texto: {
        fontSize: 40,
        color: '#000',
        marginTop: 5,
    },
    preco: {
        fontWeight: 'bold',
        fontSize: 35,
        color: '#ff6347',
        marginTop: 5,
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
        height: 700,
        alignItems: 'center',
        marginTop: 13,
        shadowOpacity: 8,
        marginTop: 15,
    },
    img: {
        width: 250,
        height: 170,
        borderRadius: 5,
    },
    fundo: {
        backgroundColor: 'black',
    },
    descricao:{
        fontSize: 18,
    },
})