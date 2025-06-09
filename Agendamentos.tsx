import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
const { width, height } = Dimensions.get('window');

type Agendamento = {
  id_agendamento: number;
  id_usuario: number;
  id_quarto: number;
  data: number;
};

export default function Home() {
   const [agendamentos, setAgendamentos] = useState<Agendamento[] | null>(null);
  
  
    useEffect(() => {
  
      const getAgendamento = async () => {
        try {
          const response = await fetch('http://localhost/HotelBemVago/agendamentos');
          // const response = await fetch('https://novo.mobi-rio.rio.br/get-avisos');
          const data = await response.json();
          setAgendamentos(data.agendamentos);
          console.log('agendamentos', data.agendamentos);
          console.error('agendamentos:', data.agendamentos);
        } catch (error) {
          console.error('Erro ao buscar agendamentos:', error);
        }
      };
       getAgendamento();
  }, []);
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
         <View style={styles.botoesContainer}>
            <View style={styles.voltar}>
                <Link href="/">
                    <Text style={styles.voltou}>←</Text>
                </Link>
            </View>     
         </View>
        <FlatList
          data={agendamentos}
                           keyExtractor={(item) => item.id_agendamento.toString()}
                           renderItem={({ item }) => (
                             <View style={styles.userContainer}>
                               <Text style={styles.userId}>Id: {item.id_agendamento}</Text>
                               <Text style={styles.userName}>Cliente: {item.id_usuario}</Text>
                               <Text style={styles.userGroup}>Quarto: {item.id_quarto}</Text>
                               <Text style={styles.userGroup}>Data: {item.data}</Text>
                             </View>
                           )}
        />
        <View style={styles.cadastrar}>
              <Link href="/CadastrarAgendamentos">
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
