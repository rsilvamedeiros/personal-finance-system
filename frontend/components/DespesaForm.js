import { useState } from "react";
import axios from "axios";

const DespesaForm = ({ onAdd }) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const despesa = { descricao, valor: parseFloat(valor) };
    const response = await axios.post("/api/despesas", despesa);
    onAdd(response.data);
    setDescricao("");
    setValor("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        className="p-2 border border-gray-300 rounded mr-2"
        required
      />
      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        className="p-2 border border-gray-300 rounded mr-2"
        required
      />
      <button type="submit" className="bg-red-500 text-white p-2 rounded">
        Adicionar Despesa
      </button>
    </form>
  );
};

export default DespesaForm;
