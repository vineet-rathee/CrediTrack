# CrediTrack

A simple ledger-management web application built with Node.js, Express.js, EJS, MongoDB, and Mongoose. CrediTrack helps manage customers, record transactions, and track money given and taken through a clean interface.

## ✨ Features

- ➕ Add new customers
- 👥 View all customers
- 📄 Individual customer profile page
- 💰 Record **Given** and **Taken** transactions
- 📊 Automatic calculation of:
  - Total customers
  - Total given
  - Total taken
  - Net balance
  - Total transactions
- 🗑 Delete customers
- 🗑 Delete individual transactions
- 🗄 Persistent data storage with MongoDB
- 🎨 Dynamic UI using EJS templates

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- EJS
- HTML5
- CSS3
- JavaScript

## 📁 Project Structure

```text
CrediTrack/
│── configs/
│   └── mongoose.js
│
│── models/
│   └── user.js
│
│── public/
│   ├── css/
│   └── images/
│
│── views/
│   ├── home.ejs
│   ├── user.ejs
│   ├── list.ejs
│   └── add.ejs
│
│── server.js
│── package.json
│── README.md
```

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/vineet-rathee/CrediTrack.git
```

Navigate to the project:

```bash
cd CrediTrack
```

Install dependencies:

```bash
npm install
```

Configure your MongoDB connection in `configs/mongoose.js`.

Start the server:

```bash
node server.js
```

Open your browser:

```text
http://localhost:3000
```

## 🎯 Learning Objectives

This project was built to practice:

- Express.js routing and middleware
- EJS templating
- CRUD operations
- MongoDB database operations
- Mongoose schemas and models
- Form handling
- Dynamic routes
- Nested transaction data

## 🔮 Future Improvements

- Edit customer details
- Edit transactions
- Search customers
- Filter transactions
- Authentication
- Responsive mobile design
- Dashboard analytics

## 👨‍💻 Author

Vineet Rathi

If you found this project useful, feel free to ⭐ the repository.