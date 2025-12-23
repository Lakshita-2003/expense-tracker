import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + Number(b.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + Number(b.amount), 0);

  return (
    <Bar
      data={{
        labels: ["Income", "Expense"],
        datasets: [
          {
            label: "Monthly Summary",
            data: [income, expense],
            backgroundColor: ["green", "red"],
          },
        ],
      }}
    />
  );
};

export default BarChart;
