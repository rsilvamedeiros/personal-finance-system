import { useState, useEffect } from "react";
import axios from "axios";
import ReceitaForm from "../components/ReceitaForm";
import ReceitaList from "../components/ReceitaList";

const Receitas = () => {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    const fetchReceitas = async () => {
      const response = await axios.get("/api/receitas");
      setReceitas(response.data);
    };
    fetchReceitas();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Receitas</h1>
      <ReceitaForm
        onAdd={(novaReceita) => setReceitas([...receitas, novaReceita])}
      />
      <ReceitaList receitas={receitas} />
    </div>
  );
};

export default Receitas;
