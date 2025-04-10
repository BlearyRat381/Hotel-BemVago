import { Image, StyleSheet, Platform, View, ScrollView, Text, FlatList, Pressable } from 'react-native';
import { Link } from 'expo-router'
import { Usuarios } from '@/constants/usuarios';

export default function home(){
    return(
        <View>
      <FlatList
        data={Usuarios()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text style={styles.userId}>Id: {item.id}</Text>
            <Text style={styles.userName}>Nome: {item.Nome}</Text>
            <Text style={styles.userGroup}>Grupo: {item.nome_grupo}</Text>
          </View>
        )}
      />
        </View>
    )
}
const styles = StyleSheet.create({
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
  