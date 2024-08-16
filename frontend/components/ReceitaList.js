const ReceitaList = ({ receitas }) => (
  <ul>
    {receitas.map((receita) => (
      <li key={receita._id} className="mb-2">
        <span>
          {receita.descricao} - R${receita.valor.toFixed(2)}
        </span>
      </li>
    ))}
  </ul>
);

export default ReceitaList;
