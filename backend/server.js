const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log(err));

// Rota inicial de teste
app.get("/", (req, res) => {
  res.send("API do Controle de Finanças");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
