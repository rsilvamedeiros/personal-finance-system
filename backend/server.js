const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const despesasRouter = require("./routes/despesas");
const receitasRouter = require("./routes/receitas");

const app = express();

// Conectar ao MongoDB
connectDB();

// Middleware para parsing de JSON
app.use(express.json());

// Rotas
app.use("/api/despesas", despesasRouter);
app.use("/api/receitas", receitasRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
