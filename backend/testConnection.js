// testConnection.js

const mongoose = require("mongoose");
require("dotenv").config(); // Para carregar as variáveis de ambiente do arquivo .env

// Função de teste da conexão
const testConnection = async () => {
  try {
    // Conecta ao MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexão com MongoDB estabelecida com sucesso!");

    // Teste básico: verificar quantas coleções existem
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    console.log(
      "Coleções encontradas no banco de dados:",
      collections.map((c) => c.name)
    );

    // Fecha a conexão
    await mongoose.connection.close();
    console.log("Conexão com MongoDB fechada.");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error.message);
  }
};

// Executa a função de teste
testConnection();
