import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const App = () => {
  const [frase, setFrase] = useState(""); //Estado da frase
  const [imagem, setImagem] = useState(require("./imagens/biscoito.png")); //Estado da Imagem


  //Armazena as frases
  const frasesMotivacionais = [
    "Seja a pessoa que seu cachorro acredita que você é!",
    "A vida é cheia de altos e baixos, especialmente quando você está preso em um elevador quebrado.",
    "Se até a uva-passa, com certeza você consegue superar essa.",
    "Seus sonhos não têm pernas. Mas você sim, preguiçoso, então vá atrás deles!",
    "Se a vida te der limões, faça uma limonada. Ou peça um mojito, ninguém vai te julgar.",
    "Você não pode agradar a todos. Não é pizza!",
    "A preguiça é mãe de todos os vícios, mas como mãe é mãe, deve ser respeitada.",
    "Errar é humano. Culpar outra pessoa é estratégia.",
    "Se não puder convencê-los, confunda-os.",
    "A vida é como uma piada ruim. Só quem entende é que ri.",
    "Nunca deixe para amanhã o que você pode deixar para depois de amanhã.",
    "Se o mundo está contra você, talvez o problema seja você mesmo estar do lado errado.",
    "Tudo o que eu peço é uma chance de provar que dinheiro não traz felicidade.",
    "Aquele que ri por último... provavelmente não entendeu a piada.",
    "A vida é curta demais para acordar cedo sem motivo.",
    "Trabalhar nunca matou ninguém, mas para quê correr o risco?",
    "Se tudo na vida fosse fácil, até o Homer Simpson seria CEO de uma empresa.",
    "Alguns causam felicidade onde quer que vão; outros, sempre que vão embora.",
    "Se a vida fosse justa, as padarias seriam 24 horas.",
    "Estou em uma fase de teste. Se não passar, vou para a fase do café.",
  ];

  //Função para quebrar o biscoito, gera um número aleatório e armanzena na variavel, seleciona o Estado da frase, com base no numero gerado e altera o Estado da imagem.
  const quebrarBiscoito = () => {
    let numeroAleatorio = Math.floor(
      Math.random() * frasesMotivacionais.length
    );
    setFrase(frasesMotivacionais[numeroAleatorio]);
    setImagem(require("./imagens/biscoitoQuebrado.png"));
  };

  return (

    //conteúdo da tela
    <View style={styles.container}>
      <Image source={imagem} style={styles.imagem} />
      <Text style={styles.texto}>{frase}</Text>
      <TouchableOpacity style={styles.botao} onPress={quebrarBiscoito}>
        <Text style={styles.textoBotao}>Quebrar Biscoito</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imagem: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
    margin: 10,
    color: "#FF8C00",
  },
  botao: {
    backgroundColor: "#FF8C00",
    padding: 10,
    borderRadius: 50,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
