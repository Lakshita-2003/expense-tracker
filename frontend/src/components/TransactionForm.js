import { useEffect, useState } from "react";
import axios from "axios";

const TransactionForm = ({ onAdd, editData, clearEdit }) => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editData) {
      setAmount(editData.amount);
      setType(editData.type);
      setCategory(editData.category);
    }
  }, [editData]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (editData) {
      await axios.put(
        `http://localhost:5000/api/transactions/${editData._id}`,
        { amount, type, category },
        { headers: { Authorization: token } }
      );
      clearEdit();
    } else {
      const res = await axios.post(
        "http://localhost:5000/api/transactions",
        { amount, type, category },
        { headers: { Authorization: token } }
      );
      onAdd(res.data);
    }

    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button>{editData ? "Update" : "Add"}</button>
    </form>
  );
};

export default TransactionForm;
