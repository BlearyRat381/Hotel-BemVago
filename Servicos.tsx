import { StyleSheet, View, Text, FlatList, SafeAreaView, Dimensions } from 'react-native';
import { Servicos } from '@/constants/servicos';

const { width, height } = Dimensions.get('window');

export default function Servico() {
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
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={Servicos()}
          keyExtractor={(item) => item.id_servico.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.serviceId}>ID: {item.id_servico}</Text>
              <Text style={styles.serviceName}>Nome: {item.nome_servico}</Text>
            </View>
          )}
        />
      </SafeAreaView>
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
});
