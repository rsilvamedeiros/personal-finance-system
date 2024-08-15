import { useState, useEffect } from "react";
import axios from "axios";

export default function Despesas() {
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/despesas")
      .then((response) => setDespesas(response.data))
      .catch((error) => console.error("Erro ao buscar despesas:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Despesas</h1>
      <ul>
        {despesas.map((despesa) => (
          <li key={despesa._id}>
            {despesa.descricao}: R${despesa.valor}
          </li>
        ))}
      </ul>
    </div>
  );
}
