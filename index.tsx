import { Image, StyleSheet, Platform, View, ScrollView, Text, FlatList, Pressable } from 'react-native';
import { Link } from 'expo-router'

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
      <Link href='/Usuarios' asChild>
          <Pressable>
            <Text> Usuários </Text>
          </Pressable>
        </Link>
      </View>

      <View>
      <Link href='/Servicos' asChild>
          <Pressable>
            <Text> Serviços </Text>
          </Pressable>
        </Link>
      </View>

      <View>
      <Link href='/Agendamentos' asChild>
          <Pressable>
            <Text> Agendamentos </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
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
