const express = require("express");
const router = express.Router();
const Despesa = require("../models/Despesa");

// Obter todas as despesas
router.get("/", async (req, res) => {
  try {
    const despesas = await Despesa.find();
    res.json(despesas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Criar uma nova despesa
router.post("/", async (req, res) => {
  const despesa = new Despesa({
    descricao: req.body.descricao,
    valor: req.body.valor,
  });

  try {
    const novaDespesa = await despesa.save();
    res.status(201).json(novaDespesa);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
