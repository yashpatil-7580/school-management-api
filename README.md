# School Management API

A Node.js + Express API with PostgreSQL to manage schools and list them based on proximity using the Haversine formula.

## 🚀 Features
- Add school data
- Fetch schools sorted by nearest distance
- Uses latitude & longitude
- Clean MVC structure

## 🛠 Tech Stack
- Node.js
- Express.js
- PostgreSQL

## 📌 API Endpoints

### 1. Add School
POST /addSchool

Body:
{
  "name": "ABC School",
  "address": "Pune",
  "latitude": 18.5204,
  "longitude": 73.8567
}

---

### 2. List Schools (Nearest First)
GET /listSchools?latitude=18.5204&longitude=73.8567

---

## ⚙️ Setup Instructions

1. Clone repo
2. Install dependencies:
   npm install

3. Create `.env` file:
   DB_USER=your_user  
   DB_HOST=localhost  
   DB_NAME=your_db  
   DB_PASSWORD=your_password  
   DB_PORT=5432  
   PORT=5000  

4. Run server:
   node src/server.js

---

## 📍 How it works
- Fetches all schools from database
- Calculates distance using Haversine formula
- Sorts schools by nearest distance

---

## 👨‍💻 Author
Yash Patil