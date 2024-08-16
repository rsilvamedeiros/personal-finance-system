import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState({ receitas: [], despesas: [] });

  useEffect(() => {
    const fetchData = async () => {
      const [receitasResponse, despesasResponse] = await Promise.all([
        axios.get("/api/receitas"),
        axios.get("/api/despesas"),
      ]);
      setData({
        receitas: receitasResponse.data,
        despesas: despesasResponse.data,
      });
    };
    fetchData();
  }, []);

  const formatChartData = (entries) => {
    const labels = entries.map((entry) =>
      new Date(entry.data).toLocaleDateString()
    );
    const values = entries.map((entry) => entry.valor);
    return {
      labels,
      datasets: [
        {
          label: "Valor",
          data: values,
          borderColor: "#4CAF50",
          backgroundColor: "rgba(76, 175, 80, 0.2)",
          fill: true,
        },
      ],
    };
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Receitas</h2>
        <Line data={formatChartData(data.receitas)} />
      </div>
      <div>
        <h2 className="text-xl font-semibold">Despesas</h2>
        <Line data={formatChartData(data.despesas)} />
      </div>
    </div>
  );
};

export default Dashboard;
