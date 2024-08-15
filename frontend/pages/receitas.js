import { useState, useEffect } from "react";
import axios from "axios";

export default function Receitas() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/receitas")
      .then((response) => setReceitas(response.data))
      .catch((error) => console.error("Erro ao buscar receitas:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Receitas</h1>
      <ul>
        {receitas.map((receita) => (
          <li key={receita._id}>
            {receita.descricao}: R${receita.valor}
          </li>
        ))}
      </ul>
    </div>
  );
}
