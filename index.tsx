import { Image, StyleSheet, View, Text, Pressable, Dimensions } from 'react-native';
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Listras diagonais no fundo */}
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

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Link style={styles.menuItem} href='/Usuarios' asChild>
          <Pressable>
            <Text style={styles.menuText}>Usuários</Text>
          </Pressable>
        </Link>

        <Link style={styles.menuItem} href='/Servicos' asChild>
          <Pressable>
            <Text style={styles.menuText}>Serviços</Text>
          </Pressable>
        </Link>

        <Link style={styles.menuItem} href='/Agendamentos' asChild>
          <Pressable>
            <Text style={styles.menuText}>Agendamentos</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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
  content: {
    flex: 1,
    padding: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 10,
  },
  logo: {
    width: 200,
    height: 60,
  },
  menuItem: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 18,
    marginBottom: 16,
    alignItems: 'center',
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  menuText: {
    fontFamily: 'Arial',
    fontWeight: "bold",
    fontSize: 18,
    color: '#333',
  },
});
