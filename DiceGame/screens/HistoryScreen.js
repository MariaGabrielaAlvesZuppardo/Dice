import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { useStore } from '../store/store';

const HistoryScreen = () => {
  const store = useStore();
  
  return (
    <View>
      <Text>Histórico de Jogadas:</Text>
      <SectionList
        sections={[{ title: 'Histórico', data: store.history }]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>
            Dados: {item.dice1} + {item.dice2}, Resultado: {item.result}
          </Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: 'bold' }}>{title}</Text>
        )}
      />
    </View>
  );
};

export default  HistoryScreen;