import { Image, StyleSheet, Platform, View, ScrollView, Text, FlatList, Pressable } from 'react-native';
import { Link } from 'expo-router'
import { Agendamentos } from '@/constants/agendamentos';

export default function Agendamento(){
    return(
        <ScrollView>
      <FlatList
        data={Agendamentos()}
        keyExtractor={(item) => item.id_agendamentos.toString()}
        renderItem={({ item }) => (
          
          <ScrollView style={styles.userContainer}>
            <Text style={styles.userId}>Id Agendamento: {item.id_agendamentos}</Text>
            <Text style={styles.userName}>Id Serviço: {item.id_servico}</Text>
            <Text style={styles.userGroup}>Data: {item.data}</Text>
            <Text style={styles.userGroup}>Hora: {item.hora}</Text>
            <Text style={styles.userName}>Cliente: {item.nome_Cliente}</Text>
          </ScrollView>
        )}
      />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  estilo: {
    flexDirection: 'row',
    
  },
  texto: {
    padding: 5,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  userContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, 
  },
  userId: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  userName: {
    fontSize: 16,
    marginBottom: 4,
    color: '#555',
  },
  userGroup: {
    fontSize: 16,
    color: '#777',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginLeft: 100,
    marginTop: 10,
    marginBottom: 10,
    padding: 100,
},
});