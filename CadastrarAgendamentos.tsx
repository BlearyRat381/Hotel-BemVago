//import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
const { width, height } = Dimensions.get('window');

type User = {
  id_usuario: number;
  data_nascimento: string;
  nome: string;
  id_grupo: string;
  email: string;
};

type Quarto = {
  id_quarto: number;
  num_quarto: number;
  valor_quarto: number;
  id_status: number;
};

// export default function CadastroQuartos() {
//   const [rooms, setRooms] = useState<Quarto[] | null>([]);
//   useEffect(() => {
//     const getQuartos = async () => {
//       try {
//         const response = await fetch('http://localhost/HotelBemVago/quartos');
//         const data = await response.json();
//         setRooms(data.quartos || []);
//       } catch (error) {
//         console.error('Erro ao buscar quartos:', error);
//         setRooms([]);
//       }
//     };
//     getQuartos();
//   }, []);

export default function CadastroAgendamento() {
  const [users, setUsers] = useState<User[] | null>([]);
  useEffect(() => {
    const getUsuarios = async () => {
      try {
        const response = await fetch('http://localhost/HotelBemVago/usuarios-clientes');
        const data = await response.json();
        setUsers(data.usuarios || []);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        setUsers([]);
      }
    };
    getUsuarios();
  }, []);

  const router = useRouter();

  const [form, setForm] = useState({
    id_usuario: '',
    id_quarto: '',
    data: '',
  });

  const [form2, setForm2] = useState({
    num_quarto: '',
    valor_quarto: '',
    id_status: '',
  });

  const handleSubmit = async () => {
    // Prepara os dados para enviar
    const dados = {
      ...form,
      id_usuario: Number(form.id_usuario), // garantir que é número,
      id_quarto: Number(form.id_quarto), // garantir que é número
    };

    try {
      const jsonValue = JSON.stringify(dados);
      const response = await fetch("http://localhost/HotelBemVago/criar-agendamentos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonValue,
      });

      if (response.ok) {
        // Navegar para a tela "agendamentos" após salvar
        router.push('http://localhost/HotelBemVago/agendamentos'); // caminho da rota, ajuste se necessário
      } else {
        const errorText = await response.text();
        console.error("Erro ao salvar:", errorText);
        Alert.alert("Erro", "Não foi possível salvar os dados.");
      }
    } catch (error) {
      console.error("Erro:", error);
      Alert.alert("Erro", "Não foi possível enviar os dados.");
    }
  };


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

        <ScrollView style={styles.listContainer}>
          <View style={styles.card}>
            <Text style={styles.titulo}>
              Cadastrar Agendamento
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Cliente:</Text>
            <Picker
              selectedValue={form.id_usuario}
              onValueChange={(itemValue) => setForm({ ...form, id_usuario: itemValue })}
              style={styles.input}
            >
              <Picker.Item label="Selecione um cliente" value="" />
              {users.map((cliente) => (
                <Picker.Item
                  key={cliente.id_usuario}
                  label={cliente.nome}
                  value={cliente.id_usuario}
                />
              ))}
            </Picker>
          </View>

          <View style={styles.card}>
            <Text>Quarto:</Text>
            <Picker
              selectedValue={form2.num_quarto}
              onValueChange={(itemValue) => setForm2({ ...form2, num_quarto: itemValue })}
              style={styles.input}
            >
              <Picker.Item label="Selecione um quarto" value="" />
              {rooms.map((num_quarto) => (
                <Picker.Item
                  key={num_quarto.id_quarto}
                  label={num_quarto.num_quarto}
                  value={num_quarto.id_quarto}
                />
              ))}

            </Picker>
          </View>

          <View style={styles.card}>
            <Text>Data:</Text>
            <TextInput
              style={styles.input}
              value={form.data}
              onChangeText={(text) => setForm({ ...form, data: text })}
            />
          </View>

          <Button title="Salvar" onPress={handleSubmit} />

        </ScrollView>
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
  input: {
    borderColor: "black",
    borderRadius: 8,
    borderBottomColor: "black",
    borderWidth: 1,
    marginTop: 8,
    textAlign: "center",
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "bold",
    fontFamily: "verdana"
  },
  cadastro: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
    alignItems: 'center',
  },
});
