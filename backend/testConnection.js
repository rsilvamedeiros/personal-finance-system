const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexão com MongoDB estabelecida com sucesso!");

    // Definindo um esquema e um modelo
    const testSchema = new mongoose.Schema({
      name: String,
      age: Number,
      occupation: String,
    });

    const TestModel = mongoose.model("testCollection", testSchema);

    // Verificar se a coleção já tem documentos
    const existingDocument = await TestModel.findOne();
    if (existingDocument) {
      console.log(
        "Coleção 'testCollection' já contém documentos. Nenhum novo documento foi adicionado."
      );
    } else {
      // Inserindo um documento de teste
      const testDocument = new TestModel({
        name: "John Doe",
        age: 30,
        occupation: "Developer",
      });

      await testDocument.save();
      console.log("Documento inserido na coleção 'testCollection'.");
    }

    // Verificando se a coleção foi criada
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    console.log(
      "Coleções encontradas no banco de dados:",
      collections.map((c) => c.name)
    );

    // Fechar a conexão
    await mongoose.connection.close();
    console.log("Conexão com MongoDB fechada.");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error.message);
    process.exit(1);
  }
};

connectDB();
