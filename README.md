
# 💰 Expense Tracker – MERN Stack Application

A full-stack **Expense Tracker** application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.  
This project allows users to **register, login, add, edit, delete, and visualize expenses and income** with charts.

---

## 🚀 Features

### 🔐 Authentication
- User Registration & Login
- JWT-based Authentication
- Protected Dashboard Routes

### 💳 Expense Management
- Add Income & Expense transactions
- Edit existing transactions
- Delete transactions
- Category selection (Food, Travel, Salary, etc.)

### 📅 Filters
- Monthly filter using date picker
- Dynamic updates without page reload

### 📊 Analytics & Charts
- Category-wise Expense **Pie Chart**
- Monthly Income vs Expense **Bar Chart**
- Real-time balance calculation

### 🎨 UI
- Clean dashboard layout
- Summary cards (Income, Expense, Balance)
- Responsive design

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Recharts / Chart.js
- CSS

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- dotenv

---

## 📂 Project Structure

expense-tracker/
├── backend/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── server.js
│ ├── package.json
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ └── index.js
│ ├── package.json
│ └── public/
│
└── README.md

yaml
Copy code

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
Create .env file inside backend:

env
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Run backend:

bash
Copy code
npm start
Backend runs on:

arduino
Copy code
http://localhost:5000
3️⃣ Frontend Setup
bash
Copy code
cd frontend
npm install
npm start
Frontend runs on:

arduino
Copy code
http://localhost:3000
🔑 Environment Variables
Variable	Description
MONGO_URI	MongoDB connection string
JWT_SECRET	Secret key for JWT

🧪 Sample Test Credentials
Register a new user using the Register page.

📦 GitHub Push (Important)
Before pushing:

bash
Copy code
node_modules/
.env
must be in .gitignore

👩‍💻 Author
Lakshita Sharma