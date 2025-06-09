import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
const { width, height } = Dimensions.get('window');


export default function CadastroQuarto() {

   const router = useRouter();

    const [form, setForm] = useState({
        num_quarto: '',
        valor_quarto: '',
        id_status: '',
    });
    
     const handleSubmit = async () => {
        // Prepara os dados para enviar
        const dados = {
            ...form,
            id_status: Number(form.id_status), // garantir que é número
            num_quarto: Number(form.num_quarto), // garantir que é número
        };

         try {
            const jsonValue = JSON.stringify(dados);
            const response = await fetch("http://localhost/HotelBemVago/criar-quartos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: jsonValue,
            });

            if (response.ok) {
                // Navegar para a tela "usuarios" após salvar
                router.push('http://localhost/HotelBemVago/quartos'); // caminho da rota, ajuste se necessário
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
              Cadastrar Quarto
            </Text>
          </View>
            <View style={styles.card}>
              <Text>Nº Quarto:</Text>
              <TextInput 
              style={styles.input}
              value={form.num_quarto}
              onChangeText={(text) => setForm({ ...form, num_quarto: text })}
              />
            </View>

            <View style={styles.card}>
              <Text>Valor:</Text>
              <TextInput
              style={styles.input}
              value={form.valor_quarto}
              onChangeText={(text) => setForm({ ...form, valor_quarto: text })}
              />
            </View>

            <View style={styles.card}>
              <Text>Status:</Text>
              <TextInput 
              style={styles.input}
              value={form.id_status}
              onChangeText={(text) => setForm({ ...form, id_status: text })}
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
