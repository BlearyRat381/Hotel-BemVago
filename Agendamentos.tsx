import { StyleSheet, Dimensions, View, Text, FlatList, ScrollView } from 'react-native';
import { Agendamentos } from '@/constants/agendamentos';

const { width, height } = Dimensions.get('window');

export default function Agendamento() {
  return (
    <View style={styles.container}>
      {/* Fundo listrado diagonal colorido */}
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

      {/* Conteúdo da lista de agendamentos */}
      <ScrollView>
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={Agendamentos()}
          keyExtractor={(item) => item.id_agendamentos.toString()}
          renderItem={({ item }) => (
            <View style={styles.userContainer}>
              <Text style={styles.userId}>Id Agendamento: {item.id_agendamentos}</Text>
              <Text style={styles.userName}>Id Serviço: {item.id_servico}</Text>
              <Text style={styles.userGroup}>Data: {item.data}</Text>
              <Text style={styles.userGroup}>Hora: {item.hora}</Text>
              <Text style={styles.userName}>Cliente: {item.nome_Cliente}</Text>
            </View>
          )}
        />
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
