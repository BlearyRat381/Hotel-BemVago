import { Image, StyleSheet, Platform, View, ScrollView, Text, FlatList, Pressable } from 'react-native';
import { Link } from 'expo-router'
import { Agendamentos } from '@/constants/agendamentos';

export default function Agendamento(){
    return(
        <View>
      <FlatList
        data={Agendamentos()}
        keyExtractor={(item) => item.id_agendamentos.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Id dos Agendamentos: {item.id_agendamentos}</Text>
            <Text>Id dos Serviços: {item.id_servico}</Text>
            <Text>Data: {item.data}</Text>
            <Text>Hora: {item.hora}</Text>
            <Text>Nome dos Clientes: {item.nome_Cliente}</Text>
          </View>
        )}
      />
        </View>
    )
}