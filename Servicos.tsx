import { Image, StyleSheet, Platform, View, ScrollView, Text, FlatList, Pressable } from 'react-native';
import { Link } from 'expo-router'
import { Servicos } from '@/constants/servicos';

export default function Servico(){
    return(
        <View>
      <FlatList
        data={Servicos()}
        keyExtractor={(item) => item.id_servico.toString()}
        renderItem={({ item }) => (
          <View>
            <Text >Id dos Serviços: {item.id_servico}</Text>
            <Text >Nome dos Serviço: {item.nome_servico}</Text>
          </View>
        )}
      />
        </View>
    )
}