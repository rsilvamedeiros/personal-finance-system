const express = require("express");
const router = express.Router();
const Receita = require("../models/Receita");

// Obter todas as receitas
router.get("/", async (req, res) => {
  try {
    const receitas = await Receita.find();
    res.json(receitas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Criar uma nova receita
router.post("/", async (req, res) => {
  const receita = new Receita({
    descricao: req.body.descricao,
    valor: req.body.valor,
  });

  try {
    const novaReceita = await receita.save();
    res.status(201).json(novaReceita);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
