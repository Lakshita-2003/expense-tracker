import { useEffect, useState } from "react";
import axios from "axios";
import TransactionForm from "../components/TransactionForm";
import BarChart from "../components/BarChart";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [editData, setEditData] = useState(null);
  const [month, setMonth] = useState("");

  const fetchTransactions = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:5000/api/transactions", {
      headers: { Authorization: token },
    });
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const deleteHandler = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`http://localhost:5000/api/transactions/${id}`, {
      headers: { Authorization: token },
    });
    fetchTransactions();
  };

  const filtered = month
    ? transactions.filter((t) => t.date.slice(0, 7) === month)
    : transactions;

  return (
    <div>
      <h2>Dashboard</h2>

      <input type="month" onChange={(e) => setMonth(e.target.value)} />

      <TransactionForm
        onAdd={(t) => setTransactions([t, ...transactions])}
        editData={editData}
        clearEdit={() => setEditData(null)}
      />

      <BarChart transactions={filtered} />

      {filtered.map((t) => (
        <div key={t._id}>
          {t.type} – ₹{t.amount} – {t.category}
          <button onClick={() => setEditData(t)}>✏️</button>
          <button onClick={() => deleteHandler(t._id)}>❌</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
