import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
const { width, height } = Dimensions.get('window');

type Room = {
  id_quarto: number;
  num_quarto: number;
  valor_quarto: number;
  id_status: number;
};
export default function Home() {
    const [rooms, setRooms] = useState<Room[] | null>(null);


  useEffect(() => {

    const getQuartos = async () => {
      try {
        const response = await fetch('http://localhost/HotelBemVago/quartos');
        // const response = await fetch('https://novo.mobi-rio.rio.br/get-avisos');
        const data = await response.json();
        setRooms(data.quartos);
        console.log('quartos', data.quartos);
        console.error('rooms:', data.quartos);
      } catch (error) {
        console.error('Erro ao buscar quarto:', error);
      }
    };

    getQuartos();
  }, []);
  return (
    <View style={styles.container}>
      {/* Background listrado diagonal */}
      <View style={StyleSheet.absoluteFill}>
        <View style={styles.diagonalStripes}>
          {Array.from({ length: 60 }).map((_, i) => (
            <View
              key={i}
              style={[
                styles.stripe,
                {
                  left: i * 20,
                  backgroundColor:
                    i % 3 === 0
                      ? '#0074cc' // azul
                      : i % 3 === 1
                      ? '#f68b1e' // laranja
                      : '#cc0000', // vermelho
                },
              ]}
            />
          ))}
        </View>
      </View>

      {/* Conteúdo com os serviços */}
        <ScrollView style={styles.listContainer}>
          <View style={styles.botoesContainer}>
              <View style={styles.voltar}>
                    <Link href="/">
                      <Text style={styles.voltou}>←</Text>
                    </Link>
               </View>
          </View>
        <FlatList
          data={rooms}
          keyExtractor={(item) => item.id_quarto.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.serviceId}>Id: {item.id_quarto}</Text>
              <Text style={styles.serviceName}>Número do Quarto: {item.num_quarto}</Text>
              <Text style={styles.serviceName}>Número do Quarto: {item.valor_quarto}</Text>
              <Text style={styles.serviceName}>Número do Quarto: {item.id_status}</Text>
            </View>
          )}
        />
        
                  
                  <View style={styles.cadastrar}>
                    <Link href="/CadastrarQuartos">
                      <Text style={styles.cadastro}>+</Text>
                    </Link>
                  </View>
                  
       </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  diagonalStripes: {
    position: 'absolute',
    width: width * 2,
    height: height * 2,
    transform: [{ rotate: '45deg' }],
  },
  stripe: {
    position: 'absolute',
    width: 6,
    height: height * 2,
    opacity: 0.25,
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  serviceId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginBottom: 6,
  },
  serviceName: {
    fontSize: 16,
    color: '#555',
  },
   cadastro: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    textAlign: "center",
  },
  cadastrar: {
    backgroundColor: 'green',
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    padding: 5,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    width: 50,
    left: "85%",
  },
   voltou: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
    color: 'white',
    alignItems: 'center',
    textAlign: "center",
  },
  voltar: {
    backgroundColor: '#0074cc',
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    width: 50,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
  },
});
