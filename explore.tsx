import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const hoteis = [
  { id: '1', nome: 'Hotel BemVago Central', preco: 'R$ 320/noite' },
  { id: '2', nome: 'Pousada Tranquila', preco: 'R$ 240/noite' },
  { id: '3', nome: 'Resort Sol & Mar', preco: 'R$ 590/noite' },
  { id: '4', nome: 'Hostel Econômico', preco: 'R$ 120/noite' },
  { id: '5', nome: 'Hotel Luxo Real', preco: 'R$ 750/noite' },
];

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/* Fundo listrado em diagonal */}
      <View style={styles.backgroundStripes}>
        {Array.from({ length: Math.ceil(width / 10) * 3 }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.stripe,
              {
                left: i * 20,
                backgroundColor:
                  i % 3 === 0
                    ? '#0074cc'
                    : i % 3 === 1
                    ? '#f68b1e'
                    : '#cc0000',
              },
            ]}
          />
        ))}
      </View>

      {/* Conteúdo */}
      <Text style={styles.title}>Explore Hotéis</Text>
      <FlatList
        data={hoteis}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.hotelName}>{item.nome}</Text>
            <Text style={styles.hotelPrice}>{item.preco}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    
  },
  backgroundStripes: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  stripe: {
    position: 'absolute',
    width: 6,
    height: height * 2,
    transform: [{ rotate: '45deg' }],
    opacity: 0.25,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 12,
    fontFamily: 'Garamond',
    color: '#333',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  hotelPrice: {
    fontSize: 16,
    color: '#777',
  },
});
