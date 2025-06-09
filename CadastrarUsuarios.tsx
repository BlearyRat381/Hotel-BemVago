import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
const { width, height } = Dimensions.get('window');

export default function CadastroUsuario() {

   const router = useRouter();

    const [form, setForm] = useState({
        nome: '',
        id_grupo: '',
        email: '',
        data_nascimento: '',
    });
    
     const handleSubmit = async () => {
        // Prepara os dados para enviar
        const dados = {
            ...form,
            id_grupo: Number(form.id_grupo), // garantir que é número
        };

         try {
            const jsonValue = JSON.stringify(dados);
            const response = await fetch("http://localhost/HotelBemVago/criar-usuarios", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: jsonValue,
            });

            if (response.ok) {
                // Navegar para a tela "usuarios" após salvar
                router.push('http://localhost/HotelBemVago/usuarios'); // caminho da rota, ajuste se necessário
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
              Cadastrar Usuário
            </Text>
          </View>
            <View style={styles.card}>
              <Text>Nome:</Text>
              <TextInput 
              style={styles.input}
              value={form.nome}
              onChangeText={(text) => setForm({ ...form, nome: text })}
              />
            </View>

            <View style={styles.card}>
              <Text>Email:</Text>
              <TextInput 
              style={styles.input}
              value={form.email}
              keyboardType="email-address"
              onChangeText={(text) => setForm({ ...form, email: text })}
              />
            </View>

            <View style={styles.card}>
              <Text>Grupo:</Text>
              <TextInput 
              style={styles.input}
              value={form.id_grupo}
              onChangeText={(text) => setForm({...form, id_grupo: text})}
              />
            </View>

             <View style={styles.card}>
              <Text>Data de Nascimento:</Text>
              <TextInput 
              style={styles.input}
              value={form.data_nascimento}
              onChangeText={(text) => setForm({...form, data_nascimento: text})}
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
