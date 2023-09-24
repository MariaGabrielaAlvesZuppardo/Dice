import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useStore } from '../store/store';

const HomeScreen = ({ navigation }) => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const store = useStore();

  const rollDice = () => {
    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;
    setDice1(newDice1);
    setDice2(newDice2);

    // Verifica se o jogador ganhou ou perdeu
    const result = newDice1 + newDice2 === 7 ? 'Você ganhou!' : 'Você perdeu!';

    // Salva o resultado no histórico global
    store.addToHistory({ dice1: newDice1, dice2: newDice2, result });

    // Navega para a tela de histórico
    navigation.navigate('History');
  };

  return (
    <View style={styles.container}>
      <Text>Role os dados e veja o resultado:</Text>
      <Image source={require('../assets/dice01.png')} style={styles.diceImage} />
      <Image source={require('../assets/dice02.png')} style={styles.diceImage} />
      <Text>{dice1 + dice2}</Text>
      <Text>{store.history.length > 0 ? store.history[0].result : ''}</Text>
      <Button title="Jogar" onPress={rollDice} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceImage: {
    width: 80, // Defina o tamanho desejado
    height: 80, // Defina o tamanho desejado
  },
});


export default HomeScreen;
