import { useState, useEffect } from "react";
import axios from "axios";
import DespesaForm from "../components/DespesaForm";
import DespesaList from "../components/DespesaList";

const Despesas = () => {
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    const fetchDespesas = async () => {
      const response = await axios.get("/api/despesas");
      setDespesas(response.data);
    };
    fetchDespesas();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Despesas</h1>
      <DespesaForm
        onAdd={(novaDespesa) => setDespesas([...despesas, novaDespesa])}
      />
      <DespesaList despesas={despesas} />
    </div>
  );
};

export default Despesas;
