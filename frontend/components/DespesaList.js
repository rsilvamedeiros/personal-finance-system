const DespesaList = ({ despesas }) => (
  <ul>
    {despesas.map((despesa) => (
      <li key={despesa._id} className="mb-2">
        <span>
          {despesa.descricao} - R${despesa.valor.toFixed(2)}
        </span>
      </li>
    ))}
  </ul>
);

export default DespesaList;
